interface Process {
    id: number,
    input: string,
    process: string,
    args: string[] | null,
    userName: string,
    isRunning: boolean,
};

export default Process;