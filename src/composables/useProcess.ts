import Process from "@/types/Process";
import { ref } from "vue";
import * as bin from '@/components/bin';

const processHistory = ref<Process[]>([]);
const currentProcess = ref<Process | null>(null);
const commandsList = [...Object.keys(bin)];

const setCurrentProcess = (process : Process) => {
    if(!isCommandExist(process.input)) {
        setCommandNotFound(process.input, process.userName);
        return;
    }

    currentProcess.value = process;
    currentProcess.value.isRunning = true;
}

const setCommandNotFound = (inputCommand: string, user?: string) => {

    const now = new Date;

    currentProcess.value = {
      id: Date.UTC(now.getFullYear(), now.getHours(), 
        now.getMinutes(), now.getSeconds(), now.getMilliseconds()),
      input: inputCommand,
      process: 'not-found',
      args: null,
      userName: user ? user : 'guest',
      isRunning: false
    };

    endCurrentProcess();
}

const deleteProcessHistory = () => {
    processHistory.value = [];
    currentProcess.value = null;
}

const endCurrentProcess = () => {
    if(currentProcess.value !== null) {
      processHistory.value.push(currentProcess.value);
      currentProcess.value = null;
    }
}

const isCommandExist = (inputCommand: string) => {

  return commandsList.includes(inputCommand);
}


const useProcess = () => {
  return { setCurrentProcess, endCurrentProcess, deleteProcessHistory,
    processHistory, currentProcess }
}

export default useProcess;