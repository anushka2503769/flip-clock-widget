# ⏰ Cute Flip Clock Widget

A responsive flip clock widget designed for Notion embeds.

Features a clean modern design with:

* Smooth flip animations
* Customizable colors
* Fully responsive sizing
* Rounded corners
* Lightweight (HTML/CSS/JavaScript only)
* Easy Notion embedding
* Hosted free with GitHub Pages

---

## Preview

Displays the current local time in:

```text
HH : MM : SS
```

The clock automatically updates every second and scales to fit the available space.

---

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/flip-clock-widget.git
cd flip-clock-widget
```

### 2. Project Structure

```text
flip-clock-widget/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

### 3. Run Locally

Simply open:

```text
index.html
```

in your browser.

Or use a local server:

```bash
python -m http.server
```

and visit:

```text
http://localhost:8000
```

---

## Customization

The widget supports URL parameters for theming.

### Parameters

| Parameter | Description                 |
| --------- | --------------------------- |
| bg        | Clock background color      |
| card      | Individual digit card color |
| text      | Text color                  |

Example:

```text
https://YOUR_USERNAME.github.io/flip-clock-widget/?bg=%23FFD6E8&card=%23FFF7FB&text=%23FF4D8D
```

---

## Theme Examples

### Sakura Pink

```text
bg=#FFD6E8
card=#FFF7FB
text=#FF4D8D
```

### Lavender

```text
bg=#E6E6FA
card=#FFFFFF
text=#6A5ACD
```

### Sage

```text
bg=#DDE8D5
card=#FFFFFF
text=#5B7C5A
```

### Dark Mode

```text
bg=#111827
card=#1F2937
text=#FFFFFF
```

---

## Deploying to GitHub Pages

1. Push the repository to GitHub.

2. Open:

```text
Settings → Pages
```

3. Under **Build and Deployment** select:

```text
Source: Deploy from a branch
```

4. Choose:

```text
Branch: main
Folder: /root
```

5. Save.

Your widget will be available at:

```text
https://YOUR_USERNAME.github.io/flip-clock-widget/
```

---

## Embedding in Notion

Inside Notion:

```text
/embed
```

Paste your widget URL:

```text
https://YOUR_USERNAME.github.io/flip-clock-widget/
```

Or use a custom theme:

```text
https://YOUR_USERNAME.github.io/flip-clock-widget/?bg=%23FFD6E8&card=%23FFF7FB&text=%23FF4D8D
```

The widget will automatically resize to fit the embed block.

---

## Built With

* HTML5
* CSS3
* Vanilla JavaScript
* GitHub Pages

No frameworks. No dependencies. No build tools.

---

## License

MIT License

Feel free to fork, modify, and use this project in personal or commercial projects.

---

Made with <3 for Notion dashboards.
