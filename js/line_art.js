document.addEventListener("DOMContentLoaded", updateLines);
window.addEventListener("resize", updateLines);

function updateLines() {
    const container = document.querySelector('.container');
    const title = document.querySelector('.title');
    const button1 = document.getElementById('button1');
    const button2 = document.getElementById('button2');
    const button3 = document.getElementById('button3');
    const svg = document.querySelector('.lines');

    // Update the SVG to match the container size
    const containerRect = container.getBoundingClientRect();
    svg.setAttribute('width', containerRect.width);
    svg.setAttribute('height', containerRect.height);
    
    // Get the center of the title (to be the starting point of the lines)
    const titleRect = title.getBoundingClientRect();
    const titleCenterX = titleRect.left + titleRect.width / 2 - containerRect.left;
    const titleCenterY = titleRect.top + titleRect.height / 2 - containerRect.top;

    // Get button positions
    const button1Rect = button1.getBoundingClientRect();
    const button2Rect = button2.getBoundingClientRect();
    const button3Rect = button3.getBoundingClientRect();

    // Get the center of each button relative to the container
    const button1CenterX = button1Rect.left + button1Rect.width / 2 - containerRect.left;
    const button1CenterY = button1Rect.top + button1Rect.height / 2 - containerRect.top;
    const button2CenterX = button2Rect.left + button2Rect.width / 2 - containerRect.left;
    const button2CenterY = button2Rect.top + button2Rect.height / 2 - containerRect.top;
    const button3CenterX = button3Rect.left + button3Rect.width / 2 - containerRect.left;
    const button3CenterY = button3Rect.top + button3Rect.height / 2 - containerRect.top;

    // Update line positions
    const line1 = document.getElementById('line1');
    const line2 = document.getElementById('line2');
    const line3 = document.getElementById('line3');

    line1.setAttribute('x1', titleCenterX);
    line1.setAttribute('y1', titleCenterY);
    line1.setAttribute('x2', button1CenterX);
    line1.setAttribute('y2', button1CenterY);

    line2.setAttribute('x1', titleCenterX);
    line2.setAttribute('y1', titleCenterY);
    line2.setAttribute('x2', button2CenterX);
    line2.setAttribute('y2', button2CenterY);

    line3.setAttribute('x1', titleCenterX);
    line3.setAttribute('y1', titleCenterY);
    line3.setAttribute('x2', button3CenterX);
    line3.setAttribute('y2', button3CenterY);
}
