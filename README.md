# Polygon Drawer: A Tool for Computer Vision

## Overview

The **Polygon Drawer** is an interactive web-based tool designed to help computer vision engineers and students easily annotate images or video frames by creating polygonal zones. These annotated zones are saved in a structured format that is easy to use in machine learning tasks such as object detection and image segmentation. The tool allows you to draw polygons, save them as zones, and download the data in a format ready for training computer vision models.

## Live Server
https://law4percent.github.io/draw-polygons-for-computer-vision/

## Features

- **Draw Polygons**: Click on the canvas to select points and create polygons.
- **Manage Zones**: Save, close, or undo polygon drawings.
- **Canvas Resizing**: Dynamically resize the canvas to fit specific needs.
- **Image/Video Upload**: Upload and display images or videos on the canvas for annotation.
- **Mode Switching**: Toggle between light and dark modes for improved user preference.
- **Zone Deletion**: Delete previously drawn zones via a dropdown list.
- **Download Data**: Export polygon zone data in a simple, usable text format.

## Use Case for Computer Vision

This tool is ideal for **computer vision engineers and students** who need to manually annotate polygonal zones on images or video frames. These annotations ar
- Each line represents a polygon zone.
- The first value (e.g., `0`, `1`) is the unique zone ID.
- The list `[(x1, y1), (x2, y2), ...]` represents the polygon's vertex coordinates.

This format is easy to integrate into your computer vision models for training purposes.

## Benefits for Computer Vision Projects

- **Quick Data Collection**: Collect polygonal annotations from images or videos, which are ready to be used for training or testing computer vision models.
- **Customizable and Easy to Use**: Resize the canvas, upload images or videos, and switch between light and dark mode to suit your preferences.
- **Downloadable Data**: Download the zone data as plain text, ready for use in machine learning models without additional data wrangling.
- **Ideal for Research & Education**: Perfect for both professionals and students in computer vision, allowing for easy annotation and zone management.

## How to Use

1. **Upload an Image or Video**: Click the "Upload Video or Image" button to load an image or video onto the canvas.
2. **Draw Polygons**: Click on the canvas to create polygon vertices. Each click adds a point.
3. **Save Zones**: After creating your polygon, click "Save Zone" to save it.
4. **Undo Points**: Use the "Undo Last Point" button to remove the last point if you made a mistake.
5. **Close Polygon**: Click "Close Polygon" to close the polygon and finalize the zone.
6. **Delete Zones**: Use the dropdown to select and delete any previously created zone.
7. **Download Data**: Click "Download Zones" to download your zone data as a plain text file, ready for use in machine learning models.

## Requirements

- A modern web browser (e.g., Chrome, Firefox, Edge).
- No server-side dependencies; everything is handled client-side for simplicity and speed.

## Please Comment or Add Suggestions

We would love to hear your thoughts! If you have any suggestions for new features, improvements, or ideas for how this tool can be more helpful, please feel free to leave a comment or submit a pull request. Your feedback will help improve this tool for everyone!

## Contributing

We welcome contributions to improve this tool! If you have suggestions for new features, bug fixes, or improvements, feel free to fork the repository and submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
e crucial for training models in the following computer vision tasks:

- **Object Detection**: Annotate areas of interest, such as objects in images, that the model will learn to detect.
- **Image Segmentation**: Annotate more complex, irregular shapes to train segmentation models that segment the image into meaningful regions.

## Example Data Format

Once you've drawn and saved your polygons, you can download the data in the following format:
    0: [(50, 60), (150, 60), (150, 200), (50, 200)] 
    1: [(200, 250), (400, 250), (400, 350), (200, 350)]


## How to Draw Polygons

1. Upload your image or video to the tool. Set the frame dimensions. And set limit for number of zones.
![image](https://github.com/user-attachments/assets/556b1752-db57-4546-bf0a-73f6ca8f033b)


2. Click on the canvas to draw your polygon by selecting points on the image. Once you've drawn your polygon, click "Save Zone" to store the polygon's coordinates. You can delete or modify the polygon as needed.
![image](https://github.com/user-attachments/assets/ccb479b5-479e-4f94-a233-8e7af1b7bde4)


3. When finished, click "Download Zones" to export your polygon data in a usable format for computer vision tasks.

![image](https://github.com/user-attachments/assets/31a554a2-db8b-44f8-800f-32e2f6e8b35b)


This sample image demonstrates how you can draw polygons on an image or video frame to annotate specific areas for tasks like object detection or segmentation.


## Sample utilization
![image](https://github.com/user-attachments/assets/cd85acda-4ed5-4be7-b345-ff7e53fc8353)

⚠️ Ensure that the frame dimensions match the dimensions of the frame in which the zones were created when using the zones.
