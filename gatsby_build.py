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


def build():
    run_command("gatsby build")


def main():
    build()


if __name__ == "__main__":
    main()