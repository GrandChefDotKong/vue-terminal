import Process from "@/types/Process";
import { ref } from "vue";
import * as bin from '@/components/bin';

const processHistory = ref<Process[]>([]);
const commandsList = [...Object.keys(bin)];

const setCurrentProcess = (process : Process) => {
  if(!isCommandExist(process.process)) {
    setCommandNotFound(process.input, process.userName);
    return;
  }

  process.isRunning = true;
  processHistory.value.push(process);
}

const setCommandNotFound = (inputCommand: string, user?: string) => {

  processHistory.value.push({
    id: processHistory.value.length,
    input: inputCommand,
    process: 'not-found',
    args: null,
    userName: user ? user : 'guest',
    isRunning: false
  })
}

const deleteProcessHistory = () => {
  processHistory.value = [];
}

const getCurrentProcess = (): Process | null => {
  if(!processHistory.value.length) return null 
  if(!processHistory.value[processHistory.value.length -1].isRunning) return null;
  
  return processHistory.value[processHistory.value.length -1];
}

const getCommandList = (): string[] | null => {
  if(!commandsList.length) return null;
  
  return commandsList;
}

const endCurrentProcess = () => {
  if(!processHistory.value.length) return;
  if(!processHistory.value[processHistory.value.length -1].isRunning) return;

  processHistory.value[processHistory.value.length -1].isRunning = false;
}

const isCommandExist = (inputCommand: string) => {
  return commandsList.includes(inputCommand);
}

const useProcess = () => {
  return { setCurrentProcess, deleteProcessHistory, getCommandList,
    getCurrentProcess, endCurrentProcess ,processHistory }
}

export default useProcess;