type ElementData = {
  element: string,
  className: string,
  innerHtml?: string,
  dataId?: string
  dataset?: Record<string, string>
};

export const createElement = ({
  element, className, innerHtml, dataset, dataId,
}: ElementData) => {
  const block = document.createElement(element);

  block.className = className;
  if (innerHtml) {
    block.innerHTML = innerHtml;
  }
  if (dataset) {
    Object.entries(dataset).forEach(([key, value]) => {
      block.dataset[key] = value;
    });
  }
  return block;
};
