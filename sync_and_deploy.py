import os
import json
from ftplib import FTP
import subprocess


def run_command(command, add_info=None):
    command_parts = command.split(" ")
    if add_info is not None:
        command_parts.append(add_info)

    result = subprocess.run(command_parts, capture_output=True, text=True, shell=True)
    if result.stdout:
        print(result.stdout)
    if result.stderr:
        print(result.stderr)

def sync():
    run_command("git add -A")

    print("Write a commit message (without special characters) and press 'Enter'")
    commit_message = input()
    run_command("git commit -m", add_info=commit_message)

    run_command("git pull")
    run_command("git push")


def build():
    run_command("gatsby build")


def recurse_delete_folder(ftp, path, root):
    wd = ftp.pwd()

    try:
        names = ftp.nlst(path)
    except Exception as e:
        # some FTP servers complain when you try and list non-existent paths
        print('recurse_delete_folder: Could not remove {0}: {1}'.format(path, e))
        return

    for name in names:
        if os.path.split(name)[1] in ('.', '..'): 
            continue
        print('recurse_delete_folder: Checking {0}'.format(name))

        try:
            ftp.cwd(name)  # if we can cwd to it, it's a folder
            ftp.cwd(wd)  # don't try a nuke a folder we're in
            recurse_delete_folder(ftp, name, root)
        except:
            ftp.delete(name)

    try:
        if path != root:  # We do not want to delete the root folder
            ftp.rmd(path)
    except Exception as e:
        print('recurse_delete_folder: Could not remove {0}: {1}'.format(path, e))


def copy_files_to_folder(ftp, target_dir_name):
        # Copying files
        for root, dirs, files in os.walk("public"):
            for dir in dirs:
                dirname = os.path.normpath(os.path.join(root, dir))
                dirname = dirname.replace('\\', '/')
                ftp_dirname = dirname.replace('public', target_dir_name)
                print("Creating {source} to {target}".format(source=dirname, target=ftp_dirname))
                ftp.mkd(ftp_dirname)
            for file in files:
                filename = os.path.normpath(os.path.join(root, file))
                filename = filename.replace('\\', '/')
                ftp_filename = filename.replace('public', target_dir_name)
                print("Copying {source} to {target}".format(source=filename, target=ftp_filename))
                ftp.storbinary('STOR ' + ftp_filename, open(filename, 'rb'))


def deploy():
    is_input_valid = False
    while not is_input_valid:
        print("Do you wish to deploy the website to production ? [y/n]")
        answer = input()
        if answer == "n":
            return
        if answer == "y":
            is_input_valid = True
    
    config = {}
    try:
        with open("config.json", "r") as config_file:
            config = json.load(config_file)
    except Exception:
        print("Could not open and read 'config.json' file. Are you sure you have one in this directory ?")
        return

    hostname = 'hostname'
    username = 'username'
    password = 'password'
    if hostname not in config:
        print("No hostname in config. Exiting...")
        return
    if username not in config:
        print("No username in config. Exiting...")
        return
    if password not in config:
        print("No password in config. Exiting...")
        return

    with FTP(host=config[hostname], user=config[username], passwd=config[password]) as ftp:
        target_dir_name = '/httpdocs'

        recurse_delete_folder(ftp, target_dir_name, root=target_dir_name)
        ftp.cwd('/')
        copy_files_to_folder(ftp, target_dir_name)


def main():
    sync()
    build()
    deploy()


if __name__ == "__main__":
    main()