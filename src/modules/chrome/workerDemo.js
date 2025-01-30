function thisWorker() {
  addEventListener('message', ({ data }) => {
    console.log(`Worker: ${data}`);
    postMessage('message from worker');
  });
}

export default function workerDemo() {
  var blob = new Blob([`(${thisWorker})()`], { type: 'text/javascript' });
  const myWorker = new Worker(URL.createObjectURL(blob));
  myWorker.addEventListener('message', ({ data }) => {
    console.log(`Main Thread: ${data}`);
  });
  myWorker.postMessage('message from main thread');
}
