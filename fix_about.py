import re

with open('src/pages/About/About.css', 'r') as f:
    css = f.read()

# Fix Profile Image Size & Add Border
profile_old = r""".about__profile-img-large {.*?transition: transform 0\.4s ease;\n}"""
profile_new = """.about__profile-img-large {
  width: 100%;
  max-width: 256px;
  height: auto;
  border-radius: var(--radius-2xl);
  object-fit: cover;
  box-shadow: 0 12px 40px rgba(0,0,0,0.6);
  border: 4px solid rgba(255,255,255,0.06);
  transition: transform 0.4s ease, border-color 0.4s ease;
  margin: 0 auto;
}
.about__profile-img-large:hover {
  border-color: rgba(255,255,255,0.18);
  transform: scale(1.02) translateY(-4px);
}"""
css = re.sub(profile_old, profile_new, css, flags=re.DOTALL)

# Also fix the hover block which was previously defined
hover_old = r""".about__profile-img-large:hover {\n  transform: scale\(1\.02\);\n}"""
css = re.sub(hover_old, "", css, flags=re.DOTALL)

# Re-align the image container so it looks balanced since we shrunk the image
container_old = r""".about__profile-image-container {.*?margin-top: var\(--spacing-6\);\n}"""
container_new = """.about__profile-image-container {
  width: 100%;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: var(--spacing-6);
  margin-top: 0;
}"""
css = re.sub(container_old, container_new, css, flags=re.DOTALL)

# Timeline updates: Shadcn minimal timeline
# Reduce the thickness of the spine, make the dots cleaner, make the cards more frosted
spine_old = r""".timeline-list::before {.*?border-radius: var\(--radius-full\);\n  }"""
spine_new = """.timeline-list::before {
    content: '';
    position: absolute;
    left: 27px;
    top: 0;
    bottom: 0;
    width: 1px;
    background: rgba(255,255,255,0.1);
  }"""
css = re.sub(spine_old, spine_new, css, flags=re.DOTALL)

progress_old = r""".timeline-progress {.*?transition: height 420ms cubic-bezier\(\.2,\.9,\.2,1\);\n  }"""
progress_new = """.timeline-progress {
    position: absolute;
    left: 27px;
    top: 0;
    width: 1px;
    height: 0%;
    background: var(--color-text-primary);
    z-index: 2;
    transition: height 420ms cubic-bezier(.2,.9,.2,1);
  }"""
css = re.sub(progress_old, progress_new, css, flags=re.DOTALL)

dot_old = r""".timeline-dot {.*?margin-top: 4px;\n  }"""
dot_new = """.timeline-dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: var(--color-bg-primary);
    border: 2px solid rgba(255,255,255,0.3);
    margin-top: 4px;
    transition: all 0.3s ease;
  }"""
css = re.sub(dot_old, dot_new, css, flags=re.DOTALL)

dot_hover_old = r""".timeline-item\.in-view \.timeline-dot {.*?box-shadow: 0 0 0 8px rgba\(79,140,255,0\.06\), 0 6px 18px rgba\(79,140,255,0\.12\);\n  }"""
dot_hover_new = """.timeline-item.in-view .timeline-dot {
    background: var(--color-text-primary);
    border-color: var(--color-text-primary);
    transform: scale(1.1);
    box-shadow: 0 0 0 4px rgba(255,255,255,0.08);
  }"""
css = re.sub(dot_hover_old, dot_hover_new, css, flags=re.DOTALL)

time_content_old = r""".timeline-content {.*?transition: all 0\.2s ease;\n  }"""
time_content_new = """.timeline-content {
    flex: 1 1 auto;
    background: rgba(255,255,255,0.02);
    border: 1px solid rgba(255,255,255,0.08);
    padding: var(--spacing-6);
    border-radius: var(--radius-xl);
    box-shadow: 0 4px 20px rgba(0,0,0,0.2);
    transition: background 0.3s ease, border-color 0.3s ease;
  }"""
css = re.sub(time_content_old, time_content_new, css, flags=re.DOTALL)

time_active_old = r""".timeline-item\.in-view \.timeline-content {.*?box-shadow: 0 18px 50px rgba\(0,0,0,0\.6\);\n  }"""
time_active_new = """.timeline-item.in-view .timeline-content {
    background: rgba(255,255,255,0.04);
    border-color: rgba(255,255,255,0.15);
  }"""
css = re.sub(time_active_old, time_active_new, css, flags=re.DOTALL)

with open('src/pages/About/About.css', 'w') as f:
    f.write(css)

