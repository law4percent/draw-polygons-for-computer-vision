
let points = [];
let entryCounter = 0;
let maxZones = 5;
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const zoneCountElement = document.getElementById('zoneCount');
const downloadBtn = document.getElementById('downloadBtn');
const fileInput = document.getElementById('fileInput');
const closeBtn = document.getElementById('closeBtn');
const saveBtn = document.getElementById('saveBtn');
const quitBtn = document.getElementById('quitBtn');
const undoBtn = document.getElementById('undoBtn');
const resizeBtn = document.getElementById('resizeBtn');
const canvasWidthInput = document.getElementById('canvasWidth');
const canvasHeightInput = document.getElementById('canvasHeight');
const maxZonesInput = document.getElementById('maxZones');
const zoneSelect = document.getElementById('zoneSelect');
const deleteZoneBtn = document.getElementById('deleteZoneBtn');
const coordinates = document.getElementById('coordinates');
let zonesData = [];
let videoElement = document.createElement('video');
let videoPlaying = false;
let imageElement = new Image();
let isImage = false;

const toggleBtn = document.getElementById('toggleModeBtn');
const body = document.body;

// By default, we want the page to start in light mode.
body.classList.add('light-mode');
toggleBtn.textContent = 'Switch to Dark Mode';  // Button text reflects the current mode

toggleBtn.addEventListener('click', () => {
body.classList.toggle('light-mode');

// Change button text based on the current mode
if (body.classList.contains('light-mode')) {
    toggleBtn.textContent = 'Switch to Dark Mode';
} else {
    toggleBtn.textContent = 'Switch to Light Mode';
}
});

// Update coordinates display
canvas.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    const x = Math.round(e.clientX - rect.left);
    const y = Math.round(e.clientY - rect.top);
    coordinates.textContent = `X: ${x}, Y: ${y}`;
});

canvas.addEventListener('mouseleave', () => {
    coordinates.textContent = 'X: 0, Y: 0';
});

canvas.addEventListener('click', (e) => {
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    points.push([x, y]);
    draw();
});

// Undo last point
function undoLastPoint() {
    if (points.length > 0) {
    points.pop();
    draw();
    }
}

// Update zone select dropdown
function updateZoneSelect() {
    zoneSelect.innerHTML = '<option value="">Select a zone...</option>';
    zonesData.forEach(zone => {
    const option = document.createElement('option');
    option.value = zone.id;
    option.textContent = `Zone ${zone.id}`;
    zoneSelect.appendChild(option);
    });
}

// Delete selected zone
function deleteZone() {
    const selectedZoneId = parseInt(zoneSelect.value);
    if (selectedZoneId !== null && !isNaN(selectedZoneId)) {
    zonesData = zonesData.filter(zone => zone.id !== selectedZoneId);
    entryCounter--;
    zoneCountElement.textContent = entryCounter;
    updateZoneSelect();
    draw();
    }
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (videoPlaying) {
    ctx.drawImage(videoElement, 0, 0, canvas.width, canvas.height);
    } else if (isImage) {
    ctx.drawImage(imageElement, 0, 0, canvas.width, canvas.height);
    }

    zonesData.forEach(zone => {
    const zonePoints = zone.points;
    ctx.beginPath();
    ctx.moveTo(zonePoints[0][0], zonePoints[0][1]);
    for (let i = 1; i < zonePoints.length; i++) {
        ctx.lineTo(zonePoints[i][0], zonePoints[i][1]);
    }
    ctx.closePath();
    ctx.strokeStyle = 'blue';
    ctx.lineWidth = 2;
    ctx.stroke();
    
    zonePoints.forEach((point) => {
        ctx.beginPath();
        ctx.arc(point[0], point[1], 5, 0, Math.PI * 2);
        ctx.fillStyle = 'red';
        ctx.fill();
    });
    });

    if (points.length > 1) {
    ctx.beginPath();
    ctx.moveTo(points[0][0], points[0][1]);
    for (let i = 1; i < points.length; i++) {
        ctx.lineTo(points[i][0], points[i][1]);
    }
    ctx.strokeStyle = 'green';
    ctx.lineWidth = 2;
    ctx.stroke();
    }

    points.forEach((point) => {
    ctx.beginPath();
    ctx.arc(point[0], point[1], 5, 0, Math.PI * 2);
    ctx.fillStyle = 'red';
    ctx.fill();
    });
}

function closePolygon() {
    if (points.length > 2) {
    ctx.beginPath();
    ctx.moveTo(points[0][0], points[0][1]);
    points.forEach((point) => {
        ctx.lineTo(point[0], point[1]);
    });
    ctx.closePath();
    ctx.strokeStyle = 'blue';
    ctx.lineWidth = 2;
    ctx.stroke();
    } else {
    alert('A polygon must have at least 3 points.');
    }
}

function saveZone() {
    if (entryCounter >= maxZones) {
    alert(`Maximum number of zones (${maxZones}) reached.`);
    return;
    }
    if (points.length < 3) {
    alert('A polygon must have at least 3 points.');
    return;
    }
    zonesData.push({
    id: entryCounter,
    points: [...points],
    });
    entryCounter++;
    zoneCountElement.textContent = entryCounter;
    updateZoneSelect();
    points = [];
    draw();
}

function resetCanvas() {
    points = [];
    entryCounter = 0;
    zonesData = [];
    zoneCountElement.textContent = entryCounter;
    updateZoneSelect();
    draw();
}

function downloadZones() {
    const zonesText = zonesData.map(zone => {
    const formattedPoints = zone.points.map(([x, y]) => `(${x}, ${y})`).join(', ');
    return `${zone.id}: [${formattedPoints}]`;
    }).join('\n');
    const blob = new Blob([zonesText], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'zones.txt';
    link.click();
}

// Event listeners
downloadBtn.addEventListener('click', downloadZones);
undoBtn.addEventListener('click', undoLastPoint);
deleteZoneBtn.addEventListener('click', deleteZone);

fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    const fileType = file.type;

    if (fileType.startsWith('video')) {
    const videoURL = URL.createObjectURL(file);
    videoElement.src = videoURL;
    videoElement.play();
    videoElement.loop = true;
    videoElement.onplay = () => {
        videoPlaying = true;
        requestAnimationFrame(updateVideoFrame);
    };
    videoElement.onpause = () => {
        videoPlaying = false;
    };
    isImage = false;
    } else if (fileType.startsWith('image')) {
    const reader = new FileReader();
    reader.onload = function (e) {
        imageElement.src = e.target.result;
        imageElement.onload = () => {
        isImage = true;
        draw();
        };
    };
    reader.readAsDataURL(file);
    videoPlaying = false;
    } else {
    alert('Please upload a valid image or video file.');
    }
});

function updateVideoFrame() {
    if (videoPlaying) {
    draw();
    requestAnimationFrame(updateVideoFrame);
    }
}

document.addEventListener('keydown', (e) => {
    if (e.key.toUpperCase() === 'C') {
    closePolygon();
    } else if (e.key.toUpperCase() === 'S') {
    saveZone();
    } else if (e.key.toUpperCase() === 'Q') {
    resetCanvas();
    } else if (e.key.toUpperCase() === 'U') {
    undoLastPoint();
    }
});

closeBtn.addEventListener('click', () => {
    closePolygon();
});

saveBtn.addEventListener('click', () => {
    saveZone();
});

quitBtn.addEventListener('click', () => {
    resetCanvas();
});

resizeBtn.addEventListener('click', () => {
    const newWidth = parseInt(canvasWidthInput.value, 10);
    const newHeight = parseInt(canvasHeightInput.value, 10);
    if (newWidth >= 100 && newHeight >= 100) {
    canvas.width = newWidth;
    canvas.height = newHeight;
    draw();
    } else {
    alert("Width and Height must be at least 100px.");
    }
});

maxZonesInput.addEventListener('input', () => {
    maxZones = parseInt(maxZonesInput.value, 10);
});