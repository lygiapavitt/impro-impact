import os
import pygit
import pysftp
import subprocess


def run_git_command(command, add_info=None):
    command_parts = command.split(" ")
    if add_info is not None:
        command_parts.append(add_info)

    result = subprocess.run(command_parts, capture_output=True, text=True)
    if result.stdout:
        print(result.stdout)
    if result.stderr:
        print("Error: {}".format(result.stderr))

def sync():
    # repo = pygit.load("ImproImpact")
    # repo.pull()
    # status_report = repo.status()
    # print(status_report)
    # repo.stage_and_commit()
    run_git_command("git add -A")

    print("Write a commit message (without special characters) and press 'Enter'")
    commit_message = input()
    run_git_command("git commit -m", add_info=commit_message)

    run_git_command("git pull")
    run_git_command("git push")


def deploy():
    is_input_valid = False
    while not is_input_valid:
        print("Do you wish to deploy the website to production ? [y/n]")
        answer = input()
        if answer == "n":
            return
        if answer == "y":
            is_input_valid = True
    
    print("deploy")
    return
    with pysftp.Connection('hostname', username='me', password='secret') as sftp:
        with sftp.cd('/allcode'):           # temporarily chdir to allcode
            sftp.put('/pycode/filename')  	# upload file to allcode/pycode on remote
            sftp.get('remote_file')         # get a remote file


def main():
    sync()
    deploy()


if __name__ == "__main__":
    main()