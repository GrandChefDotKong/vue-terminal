import { ref } from "vue";

const proccessIsRuning = ref(false);

const useProccess = () => {

    const startProccess = () => {
        proccessIsRuning.value = true;
    }

    const endProccess = () => {
        proccessIsRuning.value = false;
    }

    const isRuning = () => {
        return proccessIsRuning.value;        
    }

    return { startProccess, endProccess, proccessIsRuning }
}

export default useProccess;