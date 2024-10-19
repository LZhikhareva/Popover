import { Tooltip } from "./Tooltip";

describe('Tooltip', () => {
  let tooltip;
  let element;
  beforeEach(() => {
    element = document.createElement('div');
    element.classList.add('btn');
    document.body.appendChild(element);
    tooltip = new Tooltip();
  });
  afterEach(() => {
    if (tooltip) {
      tooltip.removeTooltip();
    }
    document.body.removeChild(element);
  });
  it('should create and position a tooltip above the element', () => {
    tooltip.showTooltip(element);
    expect(document.querySelector('.tooltip')).not.toBeNull();
    expect(document.querySelector('.tooltip-part:first-child').textContent).toBe('Popover');
    expect(document.querySelector('.tooltip-part:last-child').textContent).toBe('Vivamus sagittis lacus vel augue laoreet rutrum faucibus.');
    const tooltipRect = document.querySelector('.tooltip').getBoundingClientRect();
    const elementRect = element.getBoundingClientRect();
    const expectedTop = elementRect.top - tooltipRect.height;
    expect(tooltipRect.top).toBeCloseTo(expectedTop, 1);
    const expectedLeft = elementRect.left + elementRect.width / 2 - tooltipRect.width / 2;
    expect(tooltipRect.left).toBeCloseTo(expectedLeft, 1);
  });

  it('should remove the tooltip', () => {
    tooltip.showTooltip(element);
    tooltip.removeTooltip();
    expect(document.querySelector('.tooltip')).toBeNull();
  });
});