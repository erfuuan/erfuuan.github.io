# Header Image Setup Instructions

## How to Add Your Study Room Image

1. **Save your image** as `study-room.jpg` in the following location:

   ```
   /Users/erfan/selfProject/personal-blog/blog/static/images/study-room.jpg
   ```

2. **Image will appear** at the top of your blog homepage with:

   - Full width display
   - 300px height
   - Rounded corners
   - Proper spacing

3. **Alternative filename**: If you want to use a different name, edit the template file:
   ```
   /Users/erfan/selfProject/personal-blog/blog/templates/index.html
   ```
   And change line 60 from:
   ```html
   src="/images/study-room.jpg"
   ```
   To your preferred filename.

## Current Setup ✅

- Template is ready
- Static directory created
- Image will display beautifully with your new orange/dark theme
- Matches the cozy study room aesthetic perfectly!

## File Structure:

```
blog/
├── static/
│   └── images/
│       └── study-room.jpg  ← Place your image here
└── templates/
    └── index.html  ← Already configured
```
