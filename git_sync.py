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


def main():
    sync()


if __name__ == "__main__":
    main()