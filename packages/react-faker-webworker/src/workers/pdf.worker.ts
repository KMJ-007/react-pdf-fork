import { expose } from 'comlink';
import type { PDFProps } from '../PDF';
import './workerShim';
let log = console.info;
let progressCallBack:any;
const renderPDFInWorker = async (props: PDFProps) => {
  try {
    const { renderPDF } = await import('../renderPDF');
    return URL.createObjectURL(await renderPDF({data:props, processCallBack: progressCallBack}));
  } catch (error) {
    log(error);
    throw error;
  }
};

const onProgress = (cb: typeof console.info) => (log = cb);

const processCallBackFunction = async(callback:any) => {
  console.log("processcallbackfunction is called")
  progressCallBack = callback;
}

expose({ renderPDFInWorker: renderPDFInWorker, processCallBackFunction, onProgress });

export type WorkerType = {
  renderPDFInWorker: typeof renderPDFInWorker;
  processCallBackFunction: any
  onProgress: typeof onProgress;
};
