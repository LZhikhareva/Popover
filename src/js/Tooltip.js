export class Tooltip {
    constructor(el) {
    }

    showTooltip(element) {
        this.tooltip = document.createElement('div');
        this.tooltip.classList.add('tooltip');
        document.body.appendChild(this.tooltip);
        this.tooltipHeader = document.createElement('div');
        this.tooltipHeader.classList.add('tooltip-part');
        this.tooltipHeader.textContent = 'Popover';
        this.tooltip.appendChild(this.tooltipHeader);
        this.tooltipText = document.createElement('div');
        this.tooltipText.classList.add('tooltip-part');
        this.tooltipText.textContent = 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.';
        this.tooltip.appendChild(this.tooltipText);

        const { left, top } = element.getBoundingClientRect();

        this.tooltip.style.left = left + element.offsetWidth / 2 - this.tooltip.offsetWidth / 2 + 'px';
        this.tooltip.style.top = top - this.tooltip.offsetHeight - 5 + 'px';
    }

    removeTooltip() {
        if (this.tooltip) {
            this.tooltip.remove();
        }
    }
}