import re

with open('src/pages/About/About.css', 'r') as f:
    css = f.read()

# Replace the hero panel
heropanel_old = r""".about__hero-panel {.*?box-shadow: var\(--shadow-md\);\n}"""
heropanel_new = """.about__hero-panel {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-6);
  border-radius: var(--radius-xl);
  background: var(--color-bg-secondary);
  border: 1px solid rgba(255,255,255,0.06);
  box-shadow: 0 4px 24px rgba(0,0,0,0.5);
  overflow: hidden;
  padding: 0;
}"""
css = re.sub(heropanel_old, heropanel_new, css, flags=re.DOTALL)

highlights_old = r""".about__hero-highlight {.*?box-shadow: var\(--shadow-sm\);\n}"""
highlights_new = """.about__hero-highlight {
  padding: var(--spacing-5) var(--spacing-6);
  border-radius: var(--radius-xl);
  background: rgba(255,255,255,0.02);
  border: 1px solid rgba(255,255,255,0.06);
  box-shadow: none;
  transition: background 0.2s ease, border-color 0.2s ease;
}
.about__hero-highlight:hover {
  background: rgba(255,255,255,0.03);
  border-color: rgba(255,255,255,0.1);
}"""
css = re.sub(highlights_old, highlights_new, css, flags=re.DOTALL)

header_old = r""".about__hero-panel-header {.*?gap: var\(--spacing-2\);\n}"""
header_new = """.about__hero-panel-header {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2);
  padding: var(--spacing-6) var(--spacing-6) 0 var(--spacing-6);
}"""
css = re.sub(header_old, header_new, css, flags=re.DOTALL)

kicker_old = r""".about__hero-panel-kicker {.*?color: var\(--color-accent-primary\);\n}"""
kicker_new = """.about__hero-panel-kicker {
  font-size: 0.70rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--color-accent-secondary);
}"""
css = re.sub(kicker_old, kicker_new, css, flags=re.DOTALL)


# Delete old duplicate profile and image placeholder if they exist down below
# We will just replace them up high, but actually we can just find them and replace.
# The original file has `.about__profile-img:hover` hanging.
profile_img_hover_old = r""".about__profile-img:hover {.*?box-shadow: 0 12px 28px rgba\(2,6,23,0\.7\);\n}"""
css = re.sub(profile_img_hover_old, "", css, flags=re.DOTALL)

placeholder_old = r""".about__image-placeholder {.*?transition: all var\(--transition-base\);\n}"""
css = re.sub(placeholder_old, "", css, flags=re.DOTALL)

placeholder_hover_old = r""".about__image-placeholder:hover {.*?background: var\(--color-glass-hover\);\n}"""
css = re.sub(placeholder_hover_old, "", css, flags=re.DOTALL)

placeholder_svg_old = r""".about__image-placeholder svg {.*?opacity: 0\.4;\n}"""
css = re.sub(placeholder_svg_old, "", css, flags=re.DOTALL)

placeholder_text_old = r""".about__image-text {.*?padding: 0 var\(--spacing-4\);\n}"""
css = re.sub(placeholder_text_old, "", css, flags=re.DOTALL)


with open('src/pages/About/About.css', 'w') as f:
    f.write(css)

