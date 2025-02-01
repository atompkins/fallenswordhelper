export default function xhr() {
  const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      if (entry.initiatorType === 'xmlhttprequest') {
        console.log('xmlhttprequest request detected to', entry.name);
      }
    }
  });

  observer.observe({ type: 'resource' });
}
