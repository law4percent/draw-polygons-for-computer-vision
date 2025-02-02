# Polygon Drawer: A Tool for Computer Vision

## Overview

This **Polygon Drawer** a web-based tool designed to help computer vision engineers and students label images or video frames by drawing polygons around specific areas. You can create these polygons, save them as "zones," and then download the data in a simple format that's easy to work with. It's a handy way to annotate images or video for projects.

## Live Server
https://law4percent.github.io/draw-polygons-for-computer-vision/

## Key Features 🎨
- Draw Polygons: Effortlessly create polygons by clicking to select points on the canvas.
- Manage Zones: Save, close, or undo your polygon drawings with ease.
- Canvas Resizing: Dynamically adjust the canvas to match your project’s requirements.
- Image/Video Upload: Seamlessly upload and display images or videos on the canvas for annotation.
- Mode Switching: Switch between light and dark modes to suit your personal preference.
- Zone Deletion: Easily remove previously drawn zones using a simple dropdown list.
- Download Data: Export your polygon zone data in a clean, text-based format for easy use.

## 🖥️ Keyboard Shortcuts for a faster workflow:
- Close Polygon (C)
- Save Zone (S)
- Undo Last Point (U)
- Quit/Reset (Q)

## Benefits for Computer Vision Projects
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

I would love to hear your thoughts! If you have any suggestions for new features, improvements, or ideas for how this tool can be more helpful, please feel free to leave a comment or submit a pull request. Your feedback will help improve this tool for everyone!

## Contributing

We welcome contributions to improve this tool! If you have suggestions for new features, bug fixes, or improvements, feel free to fork the repository and submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

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

⚠️ When using the zones data, ensure that the frame dimensions match exactly with the dimensions of the frame in which the zones were created.
