import { ThemeTokens } from './interfaces/tokens';

export const aggregatedTokens: { [theme: string]: ThemeTokens } = {
  "base": {
    "accordion": {
      "background-color": {
        "value": "{body.background}",
        "type": "color",
        "description": "Accordion content background color"
      },
      "content-color": {
        "value": "{ink}",
        "type": "color",
        "description": "Accordion content background color"
      },
      "border-color": {
        "value": "{border-color.light}",
        "type": "color",
        "description": "Accordion border color"
      },
      "border-width": {
        "value": "{spacing.2px}",
        "type": "borderWidth",
        "description": "Accordion border width"
      },
      "button-background": {
        "value": "{base.lighter}",
        "type": "color",
        "description": "Accordion button background color"
      },
      "button-color": {
        "value": "{link.color}",
        "type": "color",
        "description": "Accordion button color"
      },
      "button-active-background": {
        "value": "{primary.lighter}",
        "type": "color",
        "description": "Active accordion button background color"
      },
      "button-active-color": {
        "value": "{link.active-color}",
        "type": "color",
        "description": "Active accordion button color"
      },
      "button-hover-background": {
        "value": "{primary.lighter}",
        "type": "color",
        "description": "Hover accordion background color"
      },
      "button-hover-color": {
        "value": "{link.hover-color}",
        "type": "color",
        "description": "Hover accordion color"
      },
      "button-icon-size": {
        "value": "{spacing.3}",
        "type": "sizing",
        "description": "Accordion button icon size"
      },
      "button-padding-y": {
        "value": "{spacing.2}",
        "type": "spacing",
        "description": "Accordion button padding y"
      },
      "button-padding-x": {
        "value": "{spacing.205}",
        "type": "spacing",
        "description": "Accordion button padding x"
      },
      "button-font-family": {
        "value": "{font.body}",
        "type": "fontFamilies",
        "description": "Accordion font family"
      },
      "button-font-weight": {
        "value": "{font.weight-semibold}",
        "type": "fontWeight",
        "description": "Accordion font weight"
      },
      "button-font-size": {
        "value": "{font.size-body}",
        "type": "fontSizes",
        "description": "Accordion font size"
      },
      "button-line-height": {
        "value": "{line-height.body}",
        "type": "lineHeight",
        "description": "Accordion line height"
      },
      "padding-y": {
        "value": "{spacing.2}",
        "type": "spacing",
        "description": "Accordion padding y"
      },
      "padding-x": {
        "value": "{spacing.205}",
        "type": "spacing",
        "description": "Accordion padding x"
      },
      "border-radius": {
        "value": "{border-radius.sm}",
        "type": "borderRadius",
        "description": "Accordion border radius"
      }
    },
    "primary": {
      "lightest": {
        "value": "{color.blue.5}",
        "type": "color",
        "description": "Primary lightest color"
      },
      "lighter": {
        "value": "{color.blue.10}",
        "type": "color",
        "description": "Primary lighter color"
      },
      "light": {
        "value": "{color.blue.30}",
        "type": "color",
        "description": "Primary light color"
      },
      "base": {
        "value": "{color.blue.vivid.60}",
        "type": "color",
        "description": "Primary color"
      },
      "vivid": {
        "value": "{color.blue-warm.vivid.60}",
        "type": "color",
        "description": "Vivid primary color"
      },
      "dark": {
        "value": "{color.blue-warm.vivid.70}",
        "type": "color",
        "description": "Primary dark color"
      },
      "darker": {
        "value": "{color.blue-warm.vivid.80}",
        "type": "color",
        "description": "Primary darker color"
      },
      "darkest": {
        "value": "{body.ink}",
        "type": "color",
        "description": "Primary darkest color"
      }
    },
    "accent-cool": {
      "lightest": {
        "value": "{color.blue-cool.vivid.5}",
        "type": "color",
        "description": "Accent cool lightest color"
      },
      "lighter": {
        "value": "{color.blue-cool.vivid.10}",
        "type": "color",
        "description": "Accent cool lighter color"
      },
      "light": {
        "value": "{color.blue-cool.vivid.20}",
        "type": "color",
        "description": "Accent cool light color"
      },
      "base": {
        "value": "{color.cyan.vivid.30}",
        "type": "color",
        "description": "Accent cool color"
      },
      "dark": {
        "value": "{color.blue-cool.vivid.40}",
        "type": "color",
        "description": "Accent cool dark color"
      },
      "darker": {
        "value": "{color.blue-cool.vivid.60}",
        "type": "color",
        "description": "Accent cool darker color"
      },
      "darkest": {
        "value": "{color.blue-cool.vivid.80}",
        "type": "color",
        "description": "Accent cool darkest color"
      }
    },
    "accent-warm": {
      "lightest": {
        "value": "{color.orange.5}",
        "type": "color",
        "description": "Accent warm lightest color"
      },
      "lighter": {
        "value": "{color.orange.10}",
        "type": "color",
        "description": "Accent warm lighter color"
      },
      "light": {
        "value": "{color.orange.vivid.20}",
        "type": "color",
        "description": "Accent warm light color"
      },
      "base": {
        "value": "{color.orange.vivid.30}",
        "type": "color",
        "description": "Accent warm color"
      },
      "dark": {
        "value": "{color.orange.vivid.50}",
        "type": "color",
        "description": "Accent warm dark color"
      },
      "darker": {
        "value": "{color.orange.60}",
        "type": "color",
        "description": "Accent warm darker color"
      },
      "darkest": {
        "value": "{color.orange.80}",
        "type": "color",
        "description": "Accent warm darkest color"
      }
    },
    "alert": {
      "bar-width": {
        "value": "{spacing.05}",
        "type": "sizing",
        "description": "Alert bar width"
      },
      "bar-color": {
        "value": "{base.light}",
        "type": "color",
        "description": "Alert bar color"
      },
      "background-color": {
        "value": "{base.lighter}",
        "type": "color",
        "description": "Alert background color"
      },
      "font-family": {
        "value": "{font.ui}",
        "type": "fontFamilyies",
        "description": "Alert font family"
      },
      "heading-font-size": {
        "value": "{font.size-md}",
        "type": "fontSizes",
        "description": "Alert heading font size"
      },
      "font-size": {
        "value": "{font.size-sm}",
        "type": "fontSizes",
        "description": "Alert body font size"
      },
      "line-height": {
        "value": "{line-height.2}",
        "type": "lineHeight",
        "description": "Alert line height"
      },
      "icon-size": {
        "value": "{spacing.3}",
        "type": "sizing",
        "description": "Alert icon size"
      },
      "slim-icon-size": {
        "value": "{spacing.3}",
        "type": "sizing",
        "description": "Alert icon size"
      },
      "padding-x": {
        "value": "{spacing.2}",
        "type": "spacing",
        "description": "Alert padding-x"
      },
      "padding-y": {
        "value": "{spacing.105}",
        "type": "spacing",
        "description": "Alert padding-y"
      },
      "slim-padding-x": {
        "value": "{spacing.105}",
        "type": "spacing",
        "description": "Slim alert padding-x"
      },
      "slim-padding-y": {
        "value": "{spacing.1}",
        "type": "spacing",
        "description": "Slim alert padding-y"
      },
      "text-color": {
        "value": "{base.ink}",
        "type": "color",
        "description": "Alert text color"
      },
      "icon-color": {
        "value": "{base.ink}",
        "type": "color",
        "description": "Alert icon color"
      },
      "link-color": {
        "value": "{link.color}",
        "type": "color",
        "description": "Alert link color"
      },
      "max-width": {
        "value": "{spacing.tablet}",
        "type": "sizing",
        "description": "Alert max width"
      },
      "border-radius": {
        "value": "{border-radius.sm}",
        "type": "borderRadius",
        "description": "Alert border radius"
      },
      "bar-color-info": {
        "value": "{info}",
        "type": "color",
        "description": "Alert bar color"
      },
      "background-color-info": {
        "value": "{info.lighter}",
        "type": "color",
        "description": "Alert background color"
      },
      "text-color-info": {
        "value": "{ink}",
        "type": "color",
        "description": "Alert text color"
      },
      "icon-color-info": {
        "value": "{info}",
        "type": "color",
        "description": "Alert icon color"
      },
      "link-color-info": {
        "value": "{info}",
        "type": "color",
        "description": "Alert link color"
      },
      "bar-color-warning": {
        "value": "{warning}",
        "type": "color",
        "description": "Alert bar color"
      },
      "background-color-warning": {
        "value": "{warning.lighter}",
        "type": "color",
        "description": "Alert background color"
      },
      "text-color-warning": {
        "value": "{ink}",
        "type": "color",
        "description": "Alert text color"
      },
      "icon-color-warning": {
        "value": "{warning}",
        "type": "color",
        "description": "Alert icon color"
      },
      "link-color-warning": {
        "value": "{link.color}",
        "type": "color",
        "description": "Alert link color"
      },
      "bar-color-success": {
        "value": "{success}",
        "type": "color",
        "description": "Alert bar color"
      },
      "background-color-success": {
        "value": "{success.lighter}",
        "type": "color",
        "description": "Alert background color"
      },
      "text-color-success": {
        "value": "{ink}",
        "type": "color",
        "description": "Alert text color"
      },
      "icon-color-success": {
        "value": "{success}",
        "type": "color",
        "description": "Alert icon color"
      },
      "link-color-success": {
        "value": "{link.color}",
        "type": "color",
        "description": "Alert link color"
      },
      "bar-color-error": {
        "value": "{error}",
        "type": "color",
        "description": "Alert bar color"
      },
      "background-color-error": {
        "value": "{error.lighter}",
        "type": "color",
        "description": "Alert background color"
      },
      "text-color-error": {
        "value": "{ink}",
        "type": "color",
        "description": "Alert text color"
      },
      "icon-color-error": {
        "value": "{error}",
        "type": "color",
        "description": "Alert icon color"
      },
      "link-color-error": {
        "value": "{link.color}",
        "type": "color",
        "description": "Alert link color"
      }
    },
    "banner": {
      "background": {
        "value": "{base.lightest}",
        "type": "color",
        "description": "Banner background color"
      },
      "font-family": {
        "value": "{font.ui}",
        "type": "fontFamilies",
        "description": "Banner font family"
      },
      "font-size": {
        "value": "{font.size-3xs}",
        "type": "fontSizes",
        "description": "Banner header font size"
      },
      "content-font-size": {
        "value": "{font.size-xs}",
        "type": "fontSizes",
        "description": "Banner content font size"
      },
      "line-height": {
        "value": "{line-height.4}",
        "type": "lineHeight",
        "description": "Banner line height"
      },
      "font-weight": {
        "value": "{font.weight-normal}",
        "type": "fontWeights",
        "description": "Banner font weight"
      },
      "link-color": {
        "value": "{link.color}",
        "type": "color",
        "description": "Banner link color"
      },
      "text-color": {
        "value": "{ink}",
        "type": "color",
        "description": "Banner text color"
      },
      "max-width": {
        "value": "{spacing.desktop}",
        "type": "sizing",
        "description": "Banner max width"
      },
      "content-padding-y": {
        "value": "{spacing.2}",
        "type": "sizing",
        "description": "Banner content vertical padding"
      },
      "content-padding-x": {
        "value": "{spacing.205}",
        "type": "sizing",
        "description": "Banner content horizontal padding"
      }
    },
    "button": {
      "color": {
        "value": "{white}",
        "type": "color",
        "description": "Button color"
      },
      "color-hover": {
        "value": "{white}",
        "type": "color",
        "description": "Button hover color"
      },
      "color-active": {
        "value": "{white}",
        "type": "color",
        "description": "Button active color"
      },
      "background": {
        "value": "{primary}",
        "type": "color",
        "description": "Button background color"
      },
      "background-hover": {
        "value": "{primary.dark}",
        "type": "color",
        "description": "Button hover background color"
      },
      "background-active": {
        "value": "{primary.darker}",
        "type": "color",
        "description": "Button active background color"
      },
      "inverse-color": {
        "value": "{link.reverse-color}",
        "type": "color",
        "description": "Button inverse color"
      },
      "inverse-hover-color": {
        "value": "{link.reverse-hover-color}",
        "type": "color",
        "description": "Button inverse hover color"
      },
      "inverse-active-color": {
        "value": "{link.reverse-active-color}",
        "type": "color",
        "description": "Button inverse active color"
      },
      "font-family": {
        "value": "{font.ui}",
        "type": "fontFamilies",
        "description": "Button font family"
      },
      "font-size": {
        "value": "{font-size.md}",
        "type": "fontSizes",
        "description": "Button font size"
      },
      "line-height": {
        "value": "{line-height.1}",
        "type": "lineHeights",
        "description": "Button line height"
      },
      "lg-font-size": {
        "value": "{font-size.xl}",
        "type": "fontSizes",
        "description": "Button font size"
      },
      "font-weight": {
        "value": "{font-weight.bold}",
        "type": "fontWeights",
        "description": "Button font weight"
      },
      "border-radius": {
        "value": "{border-radius.md}",
        "type": "borderRadius",
        "description": "Button border radius"
      },
      "lg-border-radius": {
        "value": "{border-radius.md}",
        "type": "borderRadius",
        "description": "Button border radius"
      },
      "small-width": {
        "value": "{spacing.6}",
        "type": "sizing",
        "description": "Small button width"
      },
      "stroke-width": {
        "value": "{border-width.md}",
        "type": "borderWidth",
        "description": "Button stroke width"
      },
      "outline-offset": {
        "value": "{focus.offset}",
        "type": "spacing",
        "description": "Button outline offset"
      },
      "padding-x": {
        "value": "{spacing.205}",
        "type": "spacing",
        "description": "Button padding x"
      },
      "padding-y": {
        "value": "{spacing.105}",
        "type": "spacing",
        "description": "Button padding y"
      },
      "lg-padding-x": {
        "value": "{spacing.4}",
        "type": "spacing",
        "description": "Button padding x"
      },
      "lg-padding-y": {
        "value": "{spacing.2}",
        "type": "spacing",
        "description": "Button padding y"
      },
      "margin-right": {
        "value": "{spacing.0}",
        "type": "spacing",
        "description": "Button margin right"
      },
      "icon-size": {
        "value": "{spacing.3}",
        "type": "sizing",
        "description": "Button icon size"
      },
      "lg-icon-size": {
        "value": "{spacing.4}",
        "type": "sizing",
        "description": "Button icon size"
      },
      "outline-background": {
        "value": "{transparent}",
        "type": "color",
        "description": "Button outline background"
      },
      "outline-background-hover": {
        "value": "{transparent}",
        "type": "color",
        "description": "Button outline hover background"
      },
      "outline-background-active": {
        "value": "{transparent}",
        "type": "color",
        "description": "Button outline active background"
      },
      "outline-color": {
        "value": "{primary}",
        "type": "color",
        "description": "Button outline color"
      },
      "outline-hover-color": {
        "value": "{primary.dark}",
        "type": "color",
        "description": "Button outline hover color"
      },
      "outline-active-color": {
        "value": "{primary.darker}",
        "type": "color",
        "description": "Button outline active color"
      },
      "outline-border-color": {
        "value": "{primary}",
        "type": "color",
        "description": "Button outline border color"
      },
      "outline-border-hover-color": {
        "value": "{primary.dark}",
        "type": "color",
        "description": "Button outline border hover color"
      },
      "outline-border-active-color": {
        "value": "{primary.darker}",
        "type": "color",
        "description": "Button outline border active color"
      }
    },
    "font-size": {
      "3xs": {
        "value": "10px",
        "type": "fontSizes",
        "description": "Smallest font size",
        "a11y": "--a11y-font-size-modifier",
        "responsiveFont": true
      },
      "2xs": {
        "value": "12px",
        "type": "fontSizes",
        "description": "Second smallest font size",
        "a11y": "--a11y-font-size-modifier",
        "responsiveFont": true
      },
      "xs": {
        "value": "13px",
        "type": "fontSizes",
        "description": "Extra small font size",
        "a11y": "--a11y-font-size-modifier",
        "responsiveFont": true
      },
      "sm": {
        "value": "14px",
        "type": "fontSizes",
        "description": "Small font size",
        "a11y": "--a11y-font-size-modifier",
        "responsiveFont": true
      },
      "md": {
        "value": "16px",
        "type": "fontSizes",
        "description": "Medium font size",
        "a11y": "--a11y-font-size-modifier",
        "responsiveFont": true
      },
      "lg": {
        "value": "20px",
        "type": "fontSizes",
        "description": "Large font size",
        "a11y": "--a11y-font-size-modifier",
        "responsiveFont": true
      },
      "xl": {
        "value": "28px",
        "type": "fontSizes",
        "description": "Extra large font size",
        "a11y": "--a11y-font-size-modifier",
        "responsiveFont": true
      },
      "2xl": {
        "value": "36px",
        "type": "fontSizes",
        "description": "Second largest font size",
        "a11y": "--a11y-font-size-modifier",
        "responsiveFont": true
      },
      "3xl": {
        "value": "40px",
        "type": "fontSizes",
        "description": "Largest font size",
        "a11y": "--a11y-font-size-modifier",
        "responsiveFont": true
      }
    },
    "line-height": {
      "1": {
        "value": "0.94",
        "type": "lineHeight",
        "description": "Smallest line height",
        "a11y": "--a11y-line-height-modifier"
      },
      "2": {
        "value": "1.08",
        "type": "lineHeight",
        "description": "Second smallest line height",
        "a11y": "--a11y-line-height-modifier"
      },
      "3": {
        "value": "1.27",
        "type": "lineHeight",
        "description": "Regular line height",
        "a11y": "--a11y-line-height-modifier"
      },
      "4": {
        "value": "1.41",
        "type": "lineHeight",
        "description": "Large line height",
        "a11y": "--a11y-line-height-modifier"
      },
      "5": {
        "value": "1.52",
        "type": "lineHeight",
        "description": "Larger line height",
        "a11y": "--a11y-line-height-modifier"
      },
      "6": {
        "value": "1.64",
        "type": "lineHeight",
        "description": "Largest line height",
        "a11y": "--a11y-line-height-modifier"
      }
    },
    "font": {
      "sans": {
        "value": "'Source Sans Pro Web', -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"",
        "type": "fontFamilies",
        "description": "System font family"
      },
      "serif": {
        "value": "Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif",
        "type": "fontFamilies",
        "description": "Serif font family"
      },
      "mono": {
        "value": "'Roboto Mono Web', \"Bitstream Vera Sans Mono\", \"Consolas\", \"Courier\", monospace",
        "type": "fontFamilies",
        "description": "Monospace font family"
      },
      "heading": {
        "value": "{font.serif}",
        "type": "fontFamilies",
        "description": "Heading font family"
      },
      "ui": {
        "value": "{font.sans}",
        "type": "fontFamilies",
        "description": "UI font family"
      },
      "code": {
        "value": "{font.mono}",
        "type": "fontFamilies",
        "description": "Code font family"
      },
      "alt": {
        "value": "{font.serif}",
        "type": "fontFamilies",
        "description": "Alternate font family"
      },
      "prose": {
        "value": "{font.sans}",
        "type": "fontFamilies",
        "description": "Prose font family"
      }
    },
    "font-weight": {
      "heavy": {
        "value": "900",
        "type": "fontWeights",
        "description": "Heaviest font weight"
      },
      "bold": {
        "value": "700",
        "type": "fontWeights",
        "description": "Bold font weight"
      },
      "semibold": {
        "value": "600",
        "type": "fontWeights",
        "description": "Semibold font weight"
      },
      "medium": {
        "value": "500",
        "type": "fontWeights",
        "description": "Medium font weight"
      },
      "normal": {
        "value": "400",
        "type": "fontWeights",
        "description": "Normal font weight"
      },
      "light": {
        "value": "300",
        "type": "fontWeights",
        "description": "Light font weight"
      },
      "thin": {
        "value": "100",
        "type": "fontWeights",
        "description": "Thinnest font weight"
      }
    },
    "body-font": {
      "size": {
        "value": "{font-size.md}",
        "type": "fontSizes",
        "description": "Body font size"
      },
      "family": {
        "value": "{font.sans}",
        "type": "fontFamilies",
        "description": "Body font family"
      },
      "weight": {
        "value": "{font-weight.normal}",
        "type": "fontWeights",
        "description": "Body font weight"
      },
      "line-height": {
        "value": "{line-height.5}",
        "type": "lineHeights",
        "description": "Body line height"
      },
      "letter-spacing": {
        "value": "{letter-spacing.1}",
        "type": "letterSpacing",
        "description": "Body letter spacing"
      },
      "paragraph-spacing": {
        "value": "{spacing.2}",
        "type": "spacing",
        "description": "Spacing between <p> elements with .usa-prose class"
      },
      "list-spacing": {
        "value": "{spacing.1}",
        "type": "spacing",
        "description": "Spacing between <ul> and <ol> child elements with .usa-prose class"
      }
    },
    "h1-font": {
      "size": {
        "value": "{font-size.3xl}",
        "type": "fontSizes",
        "description": "H1 font size"
      },
      "family": {
        "value": "{font.heading}",
        "type": "fontFamilies",
        "description": "H1 font family"
      },
      "weight": {
        "value": "{font-weight.bold}",
        "type": "fontWeights",
        "description": "H1 font weight"
      },
      "line-height": {
        "value": "{line-height.2}",
        "type": "lineHeights",
        "description": "H1 line height"
      },
      "letter-spacing": {
        "value": "{letter-spacing.1}",
        "type": "letterSpacing",
        "description": "H1 letter spacing"
      },
      "paragraph-spacing": {
        "value": "{spacing.3}",
        "type": "spacing",
        "description": "Spacing between <h1> and other elements with .usa-prose class"
      }
    },
    "h2-font": {
      "size": {
        "value": "{font-size.xl}",
        "type": "fontSizes",
        "description": "H2 font size"
      },
      "family": {
        "value": "{font.heading}",
        "type": "fontFamilies",
        "description": "H2 font family"
      },
      "weight": {
        "value": "{font-weight.bold}",
        "type": "fontWeights",
        "description": "H2 font weight"
      },
      "line-height": {
        "value": "{line-height.2}",
        "type": "lineHeights",
        "description": "H2 line height"
      },
      "letter-spacing": {
        "value": "{letter-spacing.1}",
        "type": "letterSpacing",
        "description": "H2 letter spacing"
      },
      "paragraph-spacing": {
        "value": "{spacing.3}",
        "type": "spacing",
        "description": "Spacing between <h2> and other elements with .usa-prose class"
      }
    },
    "h3-font": {
      "size": {
        "value": "{font-size.xl}",
        "type": "fontSizes",
        "description": "H3 font size"
      },
      "family": {
        "value": "{font.heading}",
        "type": "fontFamilies",
        "description": "H3 font family"
      },
      "weight": {
        "value": "{font-weight.bold}",
        "type": "fontWeights",
        "description": "H3 font weight"
      },
      "line-height": {
        "value": "{line-height.2}",
        "type": "lineHeights",
        "description": "H3 line height"
      },
      "letter-spacing": {
        "value": "{letter-spacing.1}",
        "type": "letterSpacing",
        "description": "H3 letter spacing"
      },
      "paragraph-spacing": {
        "value": "{spacing.3}",
        "type": "spacing",
        "description": "Spacing between <h3> and other elements with .usa-prose class"
      }
    },
    "h4-font": {
      "size": {
        "value": "{font-size.md}",
        "type": "fontSizes",
        "description": "H4 font size"
      },
      "family": {
        "value": "{font.heading}",
        "type": "fontFamilies",
        "description": "H4 font family"
      },
      "weight": {
        "value": "{font-weight.bold}",
        "type": "fontWeights",
        "description": "H4 font weight"
      },
      "line-height": {
        "value": "{line-height.2}",
        "type": "lineHeights",
        "description": "H4 line height"
      },
      "letter-spacing": {
        "value": "{letter-spacing.1}",
        "type": "letterSpacing",
        "description": "H4 letter spacing"
      },
      "paragraph-spacing": {
        "value": "{spacing.3}",
        "type": "spacing",
        "description": "Spacing between <h4> and other elements with .usa-prose class"
      }
    },
    "h5-font": {
      "size": {
        "value": "{font-size.sm}",
        "type": "fontSizes",
        "description": "H5 font size"
      },
      "family": {
        "value": "{font.heading}",
        "type": "fontFamilies",
        "description": "H5 font family"
      },
      "weight": {
        "value": "{font-weight.bold}",
        "type": "fontWeights",
        "description": "H5 font weight"
      },
      "line-height": {
        "value": "{line-height.2}",
        "type": "lineHeights",
        "description": "H5 line height"
      },
      "letter-spacing": {
        "value": "{letter-spacing.1}",
        "type": "letterSpacing",
        "description": "H5 letter spacing"
      },
      "paragraph-spacing": {
        "value": "{spacing.3}",
        "type": "spacing",
        "description": "Spacing between <h5> and other elements with .usa-prose class"
      }
    },
    "h6-font": {
      "size": {
        "value": "{font-size.2xs}",
        "type": "fontSizes",
        "description": "H6 font size"
      },
      "family": {
        "value": "{font.sans}",
        "type": "fontFamilies",
        "description": "H6 font family"
      },
      "weight": {
        "value": "{font-weight.normal}",
        "type": "fontWeights",
        "description": "H6 font weight"
      },
      "line-height": {
        "value": "{line-height.2}",
        "type": "lineHeights",
        "description": "H6 line height"
      },
      "letter-spacing": {
        "value": "{letter-spacing.2}",
        "type": "letterSpacing",
        "description": "H6 letter spacing"
      },
      "text-transform": {
        "value": "uppercase",
        "type": "textTransform",
        "description": "H6 text transform"
      },
      "paragraph-spacing": {
        "value": "{spacing.3}",
        "type": "spacing",
        "description": "Spacing between <h6> and other elements with .usa-prose class"
      }
    },
    "letter-spacing": {
      "0": {
        "value": "0em",
        "type": "letterSpacing",
        "description": "0 letter spacing"
      },
      "1": {
        "value": "0.025em",
        "type": "letterSpacing",
        "description": "Slightly larger letter spacing",
        "a11y": "--a11y-letter-spacing-modifier"
      },
      "2": {
        "value": "0.1em",
        "type": "letterSpacing",
        "description": "Large letter spacing",
        "a11y": "--a11y-letter-spacing-modifier"
      },
      "3": {
        "value": "0.15em",
        "type": "letterSpacing",
        "description": "Largest letter spacing",
        "a11y": "--a11y-letter-spacing-modifier"
      },
      "neg-3": {
        "value": "-0.03em",
        "type": "letterSpacing",
        "description": "Smallest letter spacing",
        "a11y": "--a11y-letter-spacing-modifier"
      },
      "neg-2": {
        "value": "-0.02em",
        "type": "letterSpacing",
        "description": "Small letter spacing",
        "a11y": "--a11y-letter-spacing-modifier"
      },
      "neg-1": {
        "value": "-0.01em",
        "type": "letterSpacing",
        "description": "Slightly smaller letter spacing",
        "a11y": "--a11y-letter-spacing-modifier"
      },
      "auto": {
        "value": "initial",
        "type": "letterSpacing",
        "description": "Auto letter spacing"
      }
    },
    "lead-font": {
      "size": {
        "value": "{font-size.lg}",
        "type": "fontSizes",
        "description": "Lead font size"
      },
      "family": {
        "value": "{body-font.family}",
        "type": "fontFamilies",
        "description": "Lead font family"
      },
      "weight": {
        "value": "{font-weight.medium}",
        "type": "fontWeights",
        "description": "Lead font weight"
      },
      "line-height": {
        "value": "{line-height.3}",
        "type": "lineHeights",
        "description": "Lead line height"
      },
      "letter-spacing": {
        "value": "{letter-spacing.0}",
        "type": "letterSpacing",
        "description": "Lead letter spacing"
      },
      "max-width": {
        "value": "{measure.base}",
        "type": "maxWidth",
        "description": "Lead max width"
      },
      "paragraph-spacing": {
        "value": "{spacing.3}",
        "type": "spacing",
        "description": "Spacing between .usa-intro and other elements within .usa-prose class"
      }
    },
    "body": {
      "background": {
        "value": "{base.lightest}",
        "type": "color",
        "description": "Body background color"
      },
      "ink": {
        "value": "{base.darkest}",
        "type": "color",
        "description": "Body text color"
      }
    },
    "table": {
      "border-width": {
        "value": "{spacing.2px}",
        "type": "sizing",
        "description": "Table border width"
      },
      "background-color": {
        "value": "{body.background}",
        "type": "color",
        "description": "Table background color"
      },
      "cell-compact-padding-x": {
        "value": "{spacing.1}",
        "type": "sizing",
        "description": "Table cell compact padding x"
      },
      "cell-compact-padding-y": {
        "value": "{spacing.05}",
        "type": "sizing",
        "description": "Table cell compact padding y"
      },
      "cell-padding-x": {
        "value": "{spacing.2}",
        "type": "sizing",
        "description": "Table cell padding x"
      },
      "cell-padding-y": {
        "value": "{spacing.1}",
        "type": "sizing",
        "description": "Table cell padding y"
      },
      "unsorted-icon-hover-color": {
        "value": "{base.dark}",
        "type": "color",
        "description": "Table unsorted icon hover color"
      },
      "unsorted-icon-color": {
        "value": "{base}",
        "type": "color",
        "description": "Table unsorted icon color"
      },
      "sorted-stripe-background-color": {
        "value": "{accent-cool.light}",
        "type": "color",
        "description": "Table sorted stripe background color"
      },
      "sorted-background-color": {
        "value": "{accent-cool.lighter}",
        "type": "color",
        "description": "Table sorted background color"
      },
      "sorted-header-background-color": {
        "value": "{accent-cool.light}",
        "type": "color",
        "description": "Table sorted header background color"
      },
      "text-hover-color": {
        "value": "{base.dark}",
        "type": "color",
        "description": "Table text hover color"
      },
      "stripe-background-color": {
        "value": "{base.lighter}",
        "type": "color",
        "description": "Table stripe background color"
      },
      "header-background-color": {
        "value": "{base.lighter}",
        "type": "color",
        "description": "Table header background color"
      },
      "border-color": {
        "value": "{body.ink}",
        "type": "color",
        "description": "Table border color"
      },
      "sorted-icon-color": {
        "value": "{table.text-color}",
        "type": "color",
        "description": "Table sorted icon color"
      },
      "sorted-header-text-color": {
        "value": "{table.text-color}",
        "type": "color",
        "description": "Table sorted header text color"
      },
      "text-color": {
        "value": "{body.ink}",
        "type": "color",
        "description": "Table text color"
      },
      "stripe-text-color": {
        "value": "{table.text-color}",
        "type": "color",
        "description": "Table stripe text color"
      },
      "header-text-color": {
        "value": "{table.text-color}",
        "type": "color",
        "description": "Table header text color"
      },
      "sorted-text-color": {
        "value": "{table.text-color}",
        "type": "color",
        "description": "Table sorted text color"
      },
      "font-size": {
        "value": "{font-size.sm}",
        "type": "fontSizes",
        "description": "Table font size"
      },
      "font-family": {
        "value": "{font.body}",
        "type": "fontFamilies",
        "description": "Table font family"
      },
      "line-height": {
        "value": "{line-height.2}",
        "type": "lineHeights",
        "description": "Table line height"
      },
      "font-weight": {
        "value": "{font-weight.normal}",
        "type": "fontWeights",
        "description": "Table font weight"
      },
      "header-font-size": {
        "value": "{font-size.sm}",
        "type": "fontSizes",
        "description": "Table header font size"
      },
      "header-font-family": {
        "value": "{font.body}",
        "type": "fontFamilies",
        "description": "Table header font family"
      },
      "header-font-weight": {
        "value": "{font-weight.semibold}",
        "type": "fontWeights",
        "description": "Table header font weight"
      },
      "header-line-height": {
        "value": "{line-height.3}",
        "type": "lineHeights",
        "description": "Table header line height"
      },
      "margin-y": {
        "value": "{spacing.205}",
        "type": "sizing",
        "description": "Table margin y"
      },
      "caption-margin-bottom": {
        "value": "{spacing.105}",
        "type": "sizing",
        "description": "Table caption margin bottom"
      },
      "caption-font-size": {
        "value": "{font-size.sm}",
        "type": "fontSizes",
        "description": "Table caption font size"
      },
      "caption-font-family": {
        "value": "{font.body}",
        "type": "fontFamilies",
        "description": "Table caption font family"
      },
      "caption-font-weight": {
        "value": "{font-weight.bold}",
        "type": "fontWeights",
        "description": "Table caption font weight"
      },
      "caption-text-align": {
        "value": "left",
        "type": "textAlignment",
        "description": "Table caption text align"
      },
      "caption-line-height": {
        "value": "{line-height.3}",
        "type": "lineHeights",
        "description": "Table caption line height"
      }
    },
    "sidenav": {
      "item-font-size": {
        "value": "{font-size.md}",
        "type": "fontSizes",
        "description": "Side navigation item font size"
      },
      "item-font-family": {
        "value": "{font.sans}",
        "type": "fontFamilies",
        "description": "Side navigation item font family"
      },
      "item-font-weight": {
        "value": "{font-weight.normal}",
        "type": "fontWeights",
        "description": "Side navigation item font weight"
      },
      "item-font-weight-current": {
        "value": "{font-weight.bold}",
        "type": "fontWeights",
        "description": "Side navigation item font weight current"
      },
      "item-line-height": {
        "value": "{line-height.4}",
        "type": "lineHeights",
        "description": "Side navigation item line height"
      },
      "item-text-align": {
        "value": "left",
        "type": "textAlign",
        "description": "Side navigation item text align"
      },
      "sublist-font-size": {
        "value": "{font-size.sm}",
        "type": "fontSizes",
        "description": "Side navigation sublist font size"
      },
      "sublist-font-weight": {
        "value": "{sidenav.item-font-weight}",
        "type": "fontWeights",
        "description": "Side navigation sublist font weight"
      },
      "sublist-font-weight-current": {
        "value": "{sidenav.item-font-weight-current}",
        "type": "fontWeights",
        "description": "Side navigation sublist font weight current"
      },
      "sublist-line-height": {
        "value": "{sidenav.item-line-height}",
        "type": "lineHeights",
        "description": "Side navigation sublist line height"
      },
      "sublist-font-family": {
        "value": "{sidenav.item-font-family}",
        "type": "fontFamilies",
        "description": "Side navigation sublist font family"
      },
      "item-background": {
        "value": "{white}",
        "type": "colors",
        "description": "Side navigation item background"
      },
      "item-background-hover": {
        "value": "{white}",
        "type": "colors",
        "description": "Side navigation item background hover"
      },
      "item-background-current": {
        "value": "{sidenav.item-background}",
        "type": "colors",
        "description": "Side navigation item background current"
      },
      "sublist-background": {
        "value": "{sidenav.item-background}",
        "type": "colors",
        "description": "Side navigation sublist background"
      },
      "sublist-background-hover": {
        "value": "{sidenav.item-background-hover}",
        "type": "colors",
        "description": "Side navigation sublist background hover"
      },
      "sublist-background-current": {
        "value": "{sidenav.item-background-current}",
        "type": "colors",
        "description": "Side navigation sublist background current"
      },
      "border-color": {
        "value": "{base.lighter}",
        "type": "colors",
        "description": "Side navigation item border color"
      },
      "border-width": {
        "value": "{border-width.sm}",
        "type": "borderWidths",
        "description": "Side navigation item border width"
      },
      "border-radius": {
        "value": "{border-radius.sm}",
        "type": "borderRadius",
        "description": "Side navigation item border radius"
      },
      "item-border-color": {
        "value": "{base.lightest}",
        "type": "colors",
        "description": "Side navigation item border color"
      },
      "item-border-width": {
        "value": "{border-width.1px}",
        "type": "borderWidths",
        "description": "Side navigation item border width"
      },
      "sublist-border-color": {
        "value": "{sidenav.item-border-color}",
        "type": "colors",
        "description": "Side navigation sublist border color"
      },
      "sublist-border-width": {
        "value": "{sidenav.item-border-width}",
        "type": "borderWidths",
        "description": "Side navigation sublist border width"
      },
      "item-padding-x": {
        "value": "{spacing.2}",
        "type": "spacing",
        "description": "Side navigation item padding x"
      },
      "item-padding-y": {
        "value": "{spacing.1}",
        "type": "spacing",
        "description": "Side navigation item padding y"
      },
      "item-margin-bottom": {
        "value": "{spacing.0}",
        "type": "spacing",
        "description": "Side navigation item margin bottom"
      },
      "item-margin-top": {
        "value": "{spacing.0}",
        "type": "spacing",
        "description": "Side navigation item margin top"
      },
      "item-color": {
        "value": "{ink}",
        "type": "colors",
        "description": "Side navigation item color"
      },
      "item-color-hover": {
        "value": "{primary}",
        "type": "colors",
        "description": "Side navigation item color hover"
      },
      "item-color-current": {
        "value": "{primary}",
        "type": "colors",
        "description": "Side navigation item color current"
      },
      "item-text-decoration": {
        "value": "none",
        "type": "textDecoration",
        "description": "Side navigation item text decoration"
      },
      "sublist-item-color": {
        "value": "{sidenav.item-color}",
        "type": "colors",
        "description": "Side navigation sublist item color"
      },
      "sublist-item-color-hover": {
        "value": "{sidenav.item-color-hover}",
        "type": "colors",
        "description": "Side navigation sublist item color hover"
      },
      "sublist-item-color-current": {
        "value": "{sidenav.item-color-current}",
        "type": "colors",
        "description": "Side navigation sublist item color current"
      },
      "sublist-item-text-decoration": {
        "value": "{sidenav.item-text-decoration}",
        "type": "textDecoration",
        "description": "Side navigation sublist item text decoration"
      },
      "item-focus-outline-offset": {
        "value": "0",
        "type": "spacing",
        "description": "Side navigation item focus outline offset"
      },
      "item-current-indicator-color": {
        "value": "{primary}",
        "type": "colors",
        "description": "Side navigation item current indicator color"
      },
      "item-current-indicator-border-radius": {
        "value": "{border-radius.pill}",
        "type": "borderRadius",
        "description": "Side navigation item current indicator border radius"
      },
      "item-current-indicator-width": {
        "value": "{spacing.05}",
        "type": "sizing",
        "description": "Side navigation item current indicator width"
      },
      "item-current-indicator-position": {
        "value": "2%",
        "type": "spacing",
        "description": "Side navigation item current indicator position. 0 is left, 100% is right."
      },
      "child-padding-left": {
        "value": "{spacing.2}",
        "type": "spacing",
        "description": "Side navigation child padding left"
      },
      "child-padding-right": {
        "value": "{spacing.0}",
        "type": "spacing",
        "description": "Side navigation child padding left"
      },
      "child-padding-multiplier": {
        "value": "2",
        "type": "spacing",
        "description": "Side navigation child padding left multiplier"
      }
    },
    "input": {
      "font-family": {
        "value": "{font.ui}",
        "type": "fontFamilies",
        "description": "Font family"
      },
      "font-size": {
        "value": "{body-font.size}",
        "type": "fontSizes",
        "description": "Font size"
      },
      "font-weight": {
        "value": "{font-weight.normal}",
        "type": "fontWeights",
        "description": "Font weight"
      },
      "line-height": {
        "value": "{line-height.3}",
        "type": "lineHeights",
        "description": "Line height"
      },
      "letter-spacing": {
        "value": "{body-font.letter-spacing}",
        "type": "letterSpacing",
        "description": "Letter spacing"
      },
      "height": {
        "value": "{spacing.5}",
        "type": "sizes",
        "description": "Height"
      },
      "select-size": {
        "value": "{spacing.205}",
        "type": "sizes",
        "description": "Select size"
      },
      "max-width": {
        "value": "{spacing.mobile-lg}",
        "type": "sizes",
        "description": "Max width"
      },
      "margin-top": {
        "value": "{spacing.1}",
        "type": "spacing",
        "description": "Margin top"
      },
      "padding-x": {
        "value": "{spacing.1}",
        "type": "spacing",
        "description": "Padding x"
      },
      "padding-y": {
        "value": "{spacing.05}",
        "type": "spacing",
        "description": "Padding y"
      },
      "large-height": {
        "value": "{spacing.6}",
        "type": "spacing",
        "description": "Large height"
      },
      "border-width": {
        "value": "{border-width.sm}",
        "type": "borderWidths",
        "description": "Border width"
      },
      "border-color": {
        "value": "{ink}",
        "type": "colors",
        "description": "Border color"
      },
      "border-color-hover": {
        "value": "{ink}",
        "type": "colors",
        "description": "Border color hover"
      },
      "color": {
        "value": "{ink}",
        "type": "colors",
        "description": "Color"
      },
      "placeholder-color": {
        "value": "{base}",
        "type": "colors",
        "description": "Placeholder color"
      },
      "background-color": {
        "value": "{white}",
        "type": "colors",
        "description": "Background color"
      },
      "border-radius": {
        "value": "{border-radius.0}",
        "type": "borderRadius",
        "description": "Border radius"
      },
      "search-min-width": {
        "value": "27ch",
        "type": "sizes",
        "description": "Search min width"
      },
      "disabled-border-color": {
        "value": "{disabled.light}",
        "type": "colors",
        "description": "Disabled border color"
      },
      "disabled-border-color-hover": {
        "value": "{input.disabled-border-color}",
        "type": "colors",
        "description": "Disabled border color hover"
      },
      "disabled-color": {
        "value": "{disabled}",
        "type": "colors",
        "description": "Disabled color"
      },
      "disabled-background-color": {
        "value": "{disabled.lighter}",
        "type": "colors",
        "description": "Disabled background color"
      },
      "label-font-size": {
        "value": "{body-font.size}",
        "type": "fontSizes",
        "description": "Label font size"
      },
      "label-font-family": {
        "value": "{body-font.family}",
        "type": "fontFamilies",
        "description": "Label font family"
      },
      "label-font-weight": {
        "value": "{body-font.weight}",
        "type": "fontWeights",
        "description": "Label font weight"
      },
      "label-color": {
        "value": "{ink}",
        "type": "colors",
        "description": "Label color"
      },
      "label-line-height": {
        "value": "{body-font.line-height}",
        "type": "lineHeights",
        "description": "Label line height"
      },
      "label-letter-spacing": {
        "value": "{body-font.letter-spacing}",
        "type": "letterSpacing",
        "description": "Label letter spacing"
      },
      "label-margin-bottom": {
        "value": "{spacing.05}",
        "type": "spacing",
        "description": "Label margin bottom"
      },
      "label-margin-top": {
        "value": "{spacing.2}",
        "type": "spacing",
        "description": "Label margin top"
      },
      "select-caret-color": {
        "value": "{input.color}",
        "type": "colors",
        "description": "Select caret color"
      }
    },
    "base": {
      "lightest": {
        "value": "{color.gray.cool.5}",
        "type": "color",
        "description": "Base lightest color"
      },
      "lighter": {
        "value": "{color.gray.cool.10}",
        "type": "color",
        "description": "Base lighter color"
      },
      "light": {
        "value": "{color.gray.cool.30}",
        "type": "color",
        "description": "Base light color"
      },
      "base": {
        "value": "{color.gray.cool.50}",
        "type": "color",
        "description": "Base color"
      },
      "dark": {
        "value": "{color.gray.cool.60}",
        "type": "color",
        "description": "Base dark color"
      },
      "darker": {
        "value": "{color.gray.cool.70}",
        "type": "color",
        "description": "Base darker color"
      },
      "darkest": {
        "value": "{color.gray.cool.90}",
        "type": "color",
        "description": "Base darkest color"
      }
    },
    "info": {
      "lighter": {
        "value": "{color.cyan.vivid.5}",
        "type": "color",
        "description": "Info lighter color"
      },
      "light": {
        "value": "{color.cyan.vivid.20}",
        "type": "color",
        "description": "Info light color"
      },
      "base": {
        "value": "{color.cyan.vivid.30}",
        "type": "color",
        "description": "Info color"
      },
      "dark": {
        "value": "{color.cyan.vivid.40}",
        "type": "color",
        "description": "Info dark color"
      },
      "darker": {
        "value": "{color.cyan.vivid.60}",
        "type": "color",
        "description": "Info darker color"
      }
    },
    "success": {
      "lighter": {
        "value": "{color.green-cool.5}",
        "type": "color",
        "description": "Success lighter color"
      },
      "light": {
        "value": "{color.green-cool.vivid.20}",
        "type": "color",
        "description": "Success light color"
      },
      "base": {
        "value": "{color.green-cool.vivid.40}",
        "type": "color",
        "description": "Success color"
      },
      "dark": {
        "value": "{color.green-cool.vivid.50}",
        "type": "color",
        "description": "Success dark color"
      },
      "darker": {
        "value": "{color.green-cool.vivid.60}",
        "type": "color",
        "description": "Success darker color"
      }
    },
    "warning": {
      "lighter": {
        "value": "{color.yellow.5}",
        "type": "color",
        "description": "Warning lighter color"
      },
      "light": {
        "value": "{color.yellow.vivid.10}",
        "type": "color",
        "description": "Warning light color"
      },
      "base": {
        "value": "{color.gold.vivid.20}",
        "type": "color",
        "description": "Warning color"
      },
      "dark": {
        "value": "{color.gold.vivid.30}",
        "type": "color",
        "description": "Warning dark color"
      },
      "darker": {
        "value": "{color.gold.vivid.50}",
        "type": "color",
        "description": "Warning darker color"
      }
    },
    "error": {
      "lighter": {
        "value": "{color.red-warm.vivid.10}",
        "type": "color",
        "description": "Error lighter color"
      },
      "light": {
        "value": "{color.red-warm.vivid.30}",
        "type": "color",
        "description": "Error light color"
      },
      "base": {
        "value": "{color.red-warm.vivid.50}",
        "type": "color",
        "description": "Error color"
      },
      "dark": {
        "value": "{color.red-warm.vivid.60}",
        "type": "color",
        "description": "Error dark color"
      },
      "darker": {
        "value": "{color.red-warm.vivid.70}",
        "type": "color",
        "description": "Error darker color"
      }
    },
    "disabled": {
      "lighter": {
        "value": "{color.gray.20}",
        "type": "color",
        "description": "Disabled lighter color"
      },
      "light": {
        "value": "{color.gray.40}",
        "type": "color",
        "description": "Disabled light color"
      },
      "base": {
        "value": "{color.gray.50}",
        "type": "color",
        "description": "Disabled color"
      },
      "dark": {
        "value": "{color.gray.70}",
        "type": "color",
        "description": "Disabled dark color"
      },
      "darker": {
        "value": "{color.gray.90}",
        "type": "color",
        "description": "Disabled darker color"
      }
    },
    "emergency": {
      "lighter": {
        "value": "{color.red.warm.vivid.10}",
        "type": "color",
        "description": "Emergency lighter color"
      },
      "light": {
        "value": "{color.red.warm.vivid.30}",
        "type": "color",
        "description": "Emergency light color"
      },
      "base": {
        "value": "{color.red.warm.vivid.60}",
        "type": "color",
        "description": "Emergency color"
      },
      "dark": {
        "value": "{color.red.warm.80}",
        "type": "color",
        "description": "Emergency dark color"
      },
      "darker": {
        "value": "{color.red.warm.90}",
        "type": "color",
        "description": "Emergency darker color"
      }
    },
    "border": {
      "radius-0": {
        "value": "{spacing.0}",
        "type": "borderRadius",
        "description": "No border radius"
      },
      "radius-sm": {
        "value": "{spacing.2px}",
        "type": "borderRadius",
        "description": "Small border radius"
      },
      "radius-md": {
        "value": "{spacing.05}",
        "type": "borderRadius",
        "description": "Medium border radius"
      },
      "radius-lg": {
        "value": "{spacing.1}",
        "type": "borderRadius",
        "description": "Large border radius"
      },
      "radius-pill": {
        "value": "{spacing.tablet}",
        "type": "borderRadius",
        "description": "Pill border radius"
      },
      "color-lighter": {
        "value": "{base.lightest}",
        "type": "color",
        "description": "Border lighter color"
      },
      "color-light": {
        "value": "{base.lighter}",
        "type": "color",
        "description": "Border light color"
      },
      "color-base": {
        "value": "{base.light}",
        "type": "color",
        "description": "Border color"
      },
      "color-dark": {
        "value": "{base}",
        "type": "color",
        "description": "Border dark color"
      },
      "color-darker": {
        "value": "{base.dark}",
        "type": "color",
        "description": "Border darker color"
      },
      "width-0": {
        "value": "{spacing.0}",
        "type": "borderWidth",
        "description": "No border width"
      },
      "width-sm": {
        "value": "{spacing.1px}",
        "type": "borderWidth",
        "description": "Small border width"
      },
      "width-md": {
        "value": "{spacing.2px}",
        "type": "borderWidth",
        "description": "Medium border width"
      },
      "width-lg": {
        "value": "{spacing.05}",
        "type": "borderWidth",
        "description": "Large border width"
      }
    },
    "radio": {
      "size": {
        "value": "{spacing.205}",
        "type": "size",
        "description": "Radio button size"
      },
      "gap": {
        "value": "{spacing.1}",
        "type": "size",
        "description": "Radio button gap"
      },
      "background-color": {
        "value": "{input.background-color}",
        "type": "color",
        "description": "Radio button background color"
      },
      "label-color": {
        "value": "{ink}",
        "type": "color",
        "description": "Radio button label color"
      },
      "label-font-family": {
        "value": "{input.font-family}",
        "type": "fontFamilies",
        "description": "Radio button label font family"
      },
      "label-font-size": {
        "value": "{input.font-size}",
        "type": "fontSizes",
        "description": "Radio button label font size"
      },
      "label-font-weight": {
        "value": "{input.font-weight}",
        "type": "fontWeights",
        "description": "Radio button label font weight"
      },
      "label-line-height": {
        "value": "{input.line-height}",
        "type": "lineHeights",
        "description": "Radio button label line height"
      },
      "label-letter-spacing": {
        "value": "{input.letter-spacing}",
        "type": "letterSpacing",
        "description": "Radio button label letter spacing"
      },
      "border-color": {
        "value": "{input.border-color}",
        "type": "color",
        "description": "Radio button border color"
      },
      "border-width": {
        "value": "{input.border-width}",
        "type": "size",
        "description": "Radio button border width"
      },
      "border-radius": {
        "value": "{border-radius.pill}",
        "type": "size",
        "description": "Radio button border radius"
      },
      "checked-background-color": {
        "value": "{primary}",
        "type": "color",
        "description": "Radio button checked background color"
      },
      "checked-border-color": {
        "value": "{primary}",
        "type": "color",
        "description": "Radio button checked border color"
      },
      "focus-border-color": {
        "value": "{input.focus-border-color}",
        "type": "color",
        "description": "Radio button focus border color"
      },
      "focus-border-width": {
        "value": "{input.focus-border-width}",
        "type": "size",
        "description": "Radio button focus border width"
      },
      "disabled-background-color": {
        "value": "{input.disabled-background-color}",
        "type": "color",
        "description": "Radio button disabled background color"
      },
      "disabled-border-color": {
        "value": "{input.disabled-border-color}",
        "type": "color",
        "description": "Radio button disabled border color"
      },
      "disabled-color": {
        "value": "{input.disabled-color}",
        "type": "color",
        "description": "Radio button disabled color"
      },
      "tile-padding-y": {
        "value": "{spacing.105}",
        "type": "size",
        "description": "Radio button tile padding y"
      },
      "tile-padding-x": {
        "value": "{spacing.105}",
        "type": "size",
        "description": "Radio button tile padding y"
      },
      "tile-background-color": {
        "value": "{radio.background-color}",
        "type": "color",
        "description": "Radio button tile background color"
      },
      "tile-label-color": {
        "value": "{radio.label-color}",
        "type": "color",
        "description": "Radio button tile label color"
      },
      "tile-border-radius": {
        "value": "{input.border-radius}",
        "type": "size",
        "description": "Radio button tile border radius"
      },
      "tile-border-color": {
        "value": "{radio.border-color}",
        "type": "color",
        "description": "Radio button tile border color"
      },
      "tile-border-width": {
        "value": "{radio.border-width}",
        "type": "size",
        "description": "Radio button tile border width"
      },
      "tile-checked-background-color": {
        "value": "{primary.lightest}",
        "type": "color",
        "description": "Radio button tile checked background color"
      },
      "tile-checked-border-color": {
        "value": "{radio.checked-border-color}",
        "type": "color",
        "description": "Radio button tile checked border color"
      }
    },
    "secondary": {
      "lightest": {
        "value": "{color.red.5}",
        "type": "color",
        "description": "Secondary lightest color"
      },
      "lighter": {
        "value": "{color.red.cool.10}",
        "type": "color",
        "description": "Secondary lighter color"
      },
      "light": {
        "value": "{color.red.30}",
        "type": "color",
        "description": "Secondary light color"
      },
      "base": {
        "value": "{color.red.50}",
        "type": "color",
        "description": "Secondary color"
      },
      "vivid": {
        "value": "{color.red.cool.vivid.50}",
        "type": "color",
        "description": "Vivid secondary color"
      },
      "dark": {
        "value": "{color.red.vivid.60}",
        "type": "color",
        "description": "Secondary dark color"
      },
      "darker": {
        "value": "{color.red.vivid.70}",
        "type": "color",
        "description": "Secondary darker color"
      },
      "darkest": {
        "value": "{color.red.80}",
        "type": "color",
        "description": "Secondary darkest color"
      }
    },
    "color": {
      "black": {
        "value": "black",
        "type": "color",
        "description": "Black"
      },
      "white": {
        "value": "white",
        "type": "color",
        "description": "White"
      },
      "red": {
        "value": "#e52207",
        "type": "color",
        "description": "Red"
      },
      "red-warm": {
        "value": "{color.red-warm.40}",
        "type": "color",
        "description": "Red warm"
      },
      "orange": {
        "value": "#e66f0e",
        "type": "color",
        "description": "Orange"
      },
      "orange-warm": {
        "value": "{color.orange-warm.40}",
        "type": "color",
        "description": "Orange warm"
      },
      "gold": {
        "value": "#ffbe2e",
        "type": "color",
        "description": "Gold"
      },
      "yellow": {
        "value": "#fee685",
        "type": "color",
        "description": "Yellow"
      },
      "green-warm": {
        "value": "{color.green-warm.40}",
        "type": "color",
        "description": "Green warm"
      },
      "green": {
        "value": "#538200",
        "type": "color",
        "description": "Green"
      },
      "green-cool": {
        "value": "{color.green-cool.40}",
        "type": "color",
        "description": "Green cool"
      },
      "mint": {
        "value": "#04c585",
        "type": "color",
        "description": "Mint"
      },
      "mint-cool": {
        "value": "{color.mint-cool.40}",
        "type": "color",
        "description": "Mint cool"
      },
      "cyan": {
        "value": "#009ec1",
        "type": "color",
        "description": "Cyan"
      },
      "blue": {
        "value": "#0076d6",
        "type": "color",
        "description": "Blue"
      },
      "blue-warm": {
        "value": "{color.blue-warm.40}",
        "type": "color",
        "description": "Blue warm"
      },
      "indigo-cool": {
        "value": "{color.indigo-cool.40}",
        "type": "color",
        "description": "Indigo cool"
      },
      "indigo": {
        "value": "#676cc8",
        "type": "color",
        "description": "Indigo"
      },
      "indigo-warm": {
        "value": "{color.indigo-warm.40}",
        "type": "color",
        "description": "Indigo warm"
      },
      "violet": {
        "value": "#8168b3",
        "type": "color",
        "description": "Violet"
      },
      "violet-warm": {
        "value": "{color.violet-warm.40}",
        "type": "color",
        "description": "Violet warm"
      },
      "magenta": {
        "value": "#d72d79",
        "type": "color",
        "description": "Magenta"
      },
      "gray-cool": {
        "value": "{color.gray-cool.40}",
        "type": "color",
        "description": "Gray cool"
      },
      "gray": {
        "value": "gray",
        "type": "color",
        "description": "Gray"
      }
    },
    "spacing": {
      "0": {
        "value": "0",
        "type": "spacing",
        "description": "No spacing"
      },
      "1": {
        "value": "8px",
        "type": "spacing",
        "description": "Small spacing",
        "a11y": "--a11y-spacing-modifier"
      },
      "2": {
        "value": "16px",
        "type": "spacing",
        "description": "Medium spacing",
        "a11y": "--a11y-spacing-modifier"
      },
      "3": {
        "value": "24px",
        "type": "spacing",
        "description": "Large spacing",
        "a11y": "--a11y-spacing-modifier"
      },
      "4": {
        "value": "32px",
        "type": "spacing",
        "description": "Large spacing",
        "a11y": "--a11y-spacing-modifier"
      },
      "5": {
        "value": "40px",
        "type": "spacing",
        "description": "Large spacing",
        "a11y": "--a11y-spacing-modifier"
      },
      "6": {
        "value": "48px",
        "type": "spacing",
        "description": "Large spacing",
        "a11y": "--a11y-spacing-modifier"
      },
      "7": {
        "value": "56px",
        "type": "spacing",
        "description": "Large spacing",
        "a11y": "--a11y-spacing-modifier"
      },
      "8": {
        "value": "64px",
        "type": "spacing",
        "description": "Large spacing",
        "a11y": "--a11y-spacing-modifier"
      },
      "9": {
        "value": "72px",
        "type": "spacing",
        "description": "Large spacing",
        "a11y": "--a11y-spacing-modifier"
      },
      "10": {
        "value": "80px",
        "type": "spacing",
        "description": "Large spacing",
        "a11y": "--a11y-spacing-modifier"
      },
      "15": {
        "value": "120px",
        "type": "spacing",
        "description": "Largest spacing",
        "a11y": "--a11y-spacing-modifier"
      },
      "105": {
        "value": "12px",
        "type": "spacing",
        "description": "Medium spacing",
        "a11y": "--a11y-spacing-modifier"
      },
      "205": {
        "value": "20px",
        "type": "spacing",
        "description": "Medium spacing",
        "a11y": "--a11y-spacing-modifier"
      },
      "neg-15": {
        "value": "-120px",
        "type": "spacing",
        "description": "Largest negative spacing",
        "a11y": "--a11y-spacing-modifier"
      },
      "neg-10": {
        "value": "-80px",
        "type": "spacing",
        "description": "Large negative spacing",
        "a11y": "--a11y-spacing-modifier"
      },
      "neg-9": {
        "value": "-72px",
        "type": "spacing",
        "description": "Large negative spacing",
        "a11y": "--a11y-spacing-modifier"
      },
      "neg-8": {
        "value": "-64px",
        "type": "spacing",
        "description": "Large negative spacing",
        "a11y": "--a11y-spacing-modifier"
      },
      "neg-7": {
        "value": "-56px",
        "type": "spacing",
        "description": "Large negative spacing",
        "a11y": "--a11y-spacing-modifier"
      },
      "neg-6": {
        "value": "-48px",
        "type": "spacing",
        "description": "Large negative spacing",
        "a11y": "--a11y-spacing-modifier"
      },
      "neg-5": {
        "value": "-40px",
        "type": "spacing",
        "description": "Large negative spacing",
        "a11y": "--a11y-spacing-modifier"
      },
      "neg-4": {
        "value": "-32px",
        "type": "spacing",
        "description": "Large negative spacing",
        "a11y": "--a11y-spacing-modifier"
      },
      "neg-3": {
        "value": "-24px",
        "type": "spacing",
        "description": "Large negative spacing",
        "a11y": "--a11y-spacing-modifier"
      },
      "neg-205": {
        "value": "-20px",
        "type": "spacing",
        "description": "Medium negative spacing",
        "a11y": "--a11y-spacing-modifier"
      },
      "neg-2": {
        "value": "-16px",
        "type": "spacing",
        "description": "Medium negative spacing",
        "a11y": "--a11y-spacing-modifier"
      },
      "neg-105": {
        "value": "-12px",
        "type": "spacing",
        "description": "Medium negative spacing",
        "a11y": "--a11y-spacing-modifier"
      },
      "neg-1": {
        "value": "-8px",
        "type": "spacing",
        "description": "Small negative spacing",
        "a11y": "--a11y-spacing-modifier"
      },
      "neg-05": {
        "value": "-4px",
        "type": "spacing",
        "description": "Small negative spacing",
        "a11y": "--a11y-spacing-modifier"
      },
      "neg-2px": {
        "value": "-2px",
        "type": "spacing",
        "description": "Small negative spacing",
        "a11y": "--a11y-spacing-modifier"
      },
      "neg-1px": {
        "value": "-1px",
        "type": "spacing",
        "description": "Smallest negative spacing",
        "a11y": "--a11y-spacing-modifier"
      },
      "1px": {
        "value": "1px",
        "type": "spacing",
        "description": "Smallest spacing",
        "a11y": "--a11y-spacing-modifier"
      },
      "2px": {
        "value": "2px",
        "type": "spacing",
        "description": "Small spacing",
        "a11y": "--a11y-spacing-modifier"
      },
      "05": {
        "value": "4px",
        "type": "spacing",
        "description": "Small spacing",
        "a11y": "--a11y-spacing-modifier"
      },
      "card": {
        "value": "160px",
        "type": "spacing",
        "description": "Card spacing",
        "a11y": "--a11y-spacing-modifier"
      },
      "card-lg": {
        "value": "240px",
        "type": "spacing",
        "description": "Large card spacing",
        "a11y": "--a11y-spacing-modifier"
      },
      "mobile": {
        "value": "320px",
        "type": "spacing",
        "description": "Mobile spacing",
        "a11y": "--a11y-spacing-modifier"
      },
      "mobile-lg": {
        "value": "480px",
        "type": "spacing",
        "description": "Large mobile spacing",
        "a11y": "--a11y-spacing-modifier"
      },
      "tablet": {
        "value": "640px",
        "type": "spacing",
        "description": "Tablet spacing",
        "a11y": "--a11y-spacing-modifier"
      },
      "tablet-lg": {
        "value": "880px",
        "type": "spacing",
        "description": "Large tablet spacing",
        "a11y": "--a11y-spacing-modifier"
      },
      "desktop": {
        "value": "1024px",
        "type": "spacing",
        "description": "Desktop spacing",
        "a11y": "--a11y-spacing-modifier"
      },
      "desktop-lg": {
        "value": "1200px",
        "type": "spacing",
        "description": "Large desktop spacing",
        "a11y": "--a11y-spacing-modifier"
      },
      "widescreen": {
        "value": "1400px",
        "type": "spacing",
        "description": "Widescreen spacing",
        "a11y": "--a11y-spacing-modifier"
      }
    },
    "focus": {
      "offset": {
        "value": "{spacing.05}",
        "type": "spacing",
        "description": "Focus offset"
      },
      "width": {
        "value": "{spacing.05}",
        "type": "spacing",
        "description": "Focus width"
      },
      "style": {
        "value": "solid",
        "type": "borderStyles",
        "description": "Focus style"
      },
      "color": {
        "value": "{color.blue.vivid.40}",
        "type": "colors",
        "description": "Focus color"
      }
    },
    "breadcrumb": {
      "icon-spacing": {
        "value": "{spacing.05}",
        "type": "spacing",
        "description": "Breadcrumb icon spacing"
      },
      "padding-x": {
        "value": "{spacing.0}",
        "type": "spacing",
        "description": "Breadcrumb padding x"
      },
      "font-weight": {
        "value": "{font-weight.normal}",
        "type": "fontWeights",
        "description": "Breadcrumb font weight"
      },
      "icon-height": {
        "value": "{spacing.2}",
        "type": "spacing",
        "description": "Breadcrumb icon height"
      },
      "gap": {
        "value": "{spacing.105}",
        "type": "spacing",
        "description": "Breadcrumb gap"
      },
      "separator-color": {
        "value": "{base}",
        "type": "colors",
        "description": "Breadcrumb separator color"
      },
      "padding-bottom": {
        "value": "{spacing.2}",
        "type": "spacing",
        "description": "Breadcrumb padding bottom"
      },
      "padding-top": {
        "value": "{spacing.2}",
        "type": "spacing",
        "description": "Breadcrumb padding top"
      },
      "min-width": {
        "value": "{spacing.mobile-lg}",
        "type": "spacing",
        "description": "Breadcrumb min width"
      },
      "link-visited-color": {
        "value": "{link-visited-color}",
        "type": "colors",
        "description": "Breadcrumb link visited color"
      },
      "line-height": {
        "value": "{line-height.2}",
        "type": "lineHeights",
        "description": "Breadcrumb line height"
      },
      "background": {
        "value": "{body-background}",
        "type": "colors",
        "description": "Breadcrumb background"
      },
      "link-active-color": {
        "value": "{link-active-color}",
        "type": "colors",
        "description": "Breadcrumb link active color"
      },
      "link-hover-color": {
        "value": "{link-hover-color}",
        "type": "colors",
        "description": "Breadcrumb link hover color"
      },
      "link-color": {
        "value": "{link-color}",
        "type": "colors",
        "description": "Breadcrumb link color"
      },
      "font-size": {
        "value": "{font-size.md}",
        "type": "fontSizes",
        "description": "Breadcrumb font size"
      },
      "font-family": {
        "value": "{font.body}",
        "type": "fontFamilies",
        "description": "Breadcrumb font family"
      }
    },
    "modal": {
      "background-color": {
        "value": "{white}",
        "type": "colors",
        "description": "Modal background color"
      },
      "footer-margin-top": {
        "value": "{spacing.3}",
        "type": "spacing",
        "description": "Modal footer margin top"
      },
      "close-icon-hover-color": {
        "value": "{base.darkest}",
        "type": "colors",
        "description": "Modal close icon hover color"
      },
      "close-icon-color": {
        "value": "{base}",
        "type": "colors",
        "description": "Modal close icon color"
      },
      "close-icon-size": {
        "value": "{spacing.3}",
        "type": "spacing",
        "description": "Modal close icon size"
      },
      "lg-max-width": {
        "value": "{spacing.tablet}",
        "type": "spacing",
        "description": "Modal large max width"
      },
      "lg-content-max-width": {
        "value": "{spacing.tablet-lg}",
        "type": "spacing",
        "description": "Modal large content max width"
      },
      "default-max-width": {
        "value": "{spacing.mobile-lg}",
        "type": "spacing",
        "description": "Modal default max width"
      },
      "large-padding-x": {
        "value": "{spacing.4}",
        "type": "spacing",
        "description": "Modal large padding x"
      },
      "large-padding-y": {
        "value": "{spacing.3}",
        "type": "spacing",
        "description": "Modal large padding y"
      },
      "padding-x": {
        "value": "{spacing.205}",
        "type": "spacing",
        "description": "Modal padding x"
      },
      "padding-y": {
        "value": "{spacing.2}",
        "type": "spacing",
        "description": "Modal padding y"
      },
      "border-width": {
        "value": "{spacing.05}",
        "type": "spacing",
        "description": "Modal border width"
      },
      "border-color": {
        "value": "{base.lighter}",
        "type": "colors",
        "description": "Modal border color"
      },
      "text-color": {
        "value": "{ink}",
        "type": "colors",
        "description": "Modal text color"
      },
      "border-radius": {
        "value": "{border-radius.lg}",
        "type": "spacing",
        "description": "Modal border radius"
      },
      "overlay-background-color": {
        "value": "{color.black.transparent.70}",
        "type": "colors",
        "description": "Modal overlay background color"
      }
    }
  },
  "haystack": {
    "accordion": {
      "background-color": {
        "value": "{black}",
        "type": "color",
        "description": "Accordion content background color"
      },
      "content-color": {
        "value": "{white}",
        "type": "color",
        "description": "Accordion content background color"
      },
      "border-color": {
        "value": "{border-color.base}",
        "type": "color",
        "description": "Accordion border color"
      },
      "border-width": {
        "value": "{spacing.05}",
        "type": "borderWidth",
        "description": "Accordion border width"
      },
      "button-background": {
        "value": "{base.darkest}",
        "type": "color",
        "description": "Accordion button background color"
      },
      "button-color": {
        "value": "{primary.lighter}",
        "type": "color",
        "description": "Accordion button color"
      },
      "button-active-background": {
        "value": "{base.darkest}",
        "type": "color",
        "description": "Active accordion button background color"
      },
      "button-active-color": {
        "value": "{white}",
        "type": "color",
        "description": "Active accordion button color"
      },
      "button-hover-background": {
        "value": "{black}",
        "type": "color",
        "description": "Hover accordion background color"
      },
      "button-hover-color": {
        "value": "{white}",
        "type": "color",
        "description": "Hover accordion color"
      },
      "button-icon-size": {
        "value": "{spacing.3}",
        "type": "sizing",
        "description": "Accordion button icon size"
      },
      "button-padding-y": {
        "value": "{spacing.2}",
        "type": "spacing",
        "description": "Accordion button padding y"
      },
      "button-padding-x": {
        "value": "{spacing.205}",
        "type": "spacing",
        "description": "Accordion button padding x"
      },
      "button-font-family": {
        "value": "{font.body}",
        "type": "fontFamilies",
        "description": "Accordion font family"
      },
      "button-font-weight": {
        "value": "{font.weight-normal}",
        "type": "fontWeight",
        "description": "Accordion font weight"
      },
      "button-font-size": {
        "value": "{font.size-body}",
        "type": "fontSizes",
        "description": "Accordion font size"
      },
      "button-line-height": {
        "value": "{line-height.body}",
        "type": "lineHeight",
        "description": "Accordion line height"
      },
      "padding-y": {
        "value": "{spacing.2}",
        "type": "spacing",
        "description": "Accordion padding y"
      },
      "padding-x": {
        "value": "{spacing.205}",
        "type": "spacing",
        "description": "Accordion padding x"
      },
      "border-radius": {
        "value": "{border-radius.05}",
        "type": "borderRadius",
        "description": "Accordion border radius"
      }
    },
    "primary": {
      "lightest": {
        "value": "{white}",
        "type": "color",
        "description": "Primary lightest color"
      },
      "lighter": {
        "value": "{color.orange.10}",
        "type": "color",
        "description": "Primary lighter color"
      },
      "light": {
        "value": "{color.orange.vivid.20}",
        "type": "color",
        "description": "Primary light color"
      },
      "base": {
        "value": "{color.orange.vivid.30}",
        "type": "color",
        "description": "Primary color"
      },
      "vivid": {
        "value": "{color.orange-warm.vivid.30}",
        "type": "color",
        "description": "Vivid primary color"
      },
      "dark": {
        "value": "{color.orange.vivid.40}",
        "type": "color",
        "description": "Primary dark color"
      },
      "darker": {
        "value": "{color.orange.vivid.50}",
        "type": "color",
        "description": "Primary darker color"
      },
      "darkest": {
        "value": "{color.orange.vivid.70}",
        "type": "color",
        "description": "Primary darkest color"
      }
    },
    "button": {
      "color": {
        "value": "{base.darkest}",
        "type": "color",
        "description": "Button color"
      },
      "color-hover": {
        "value": "{base.darkest}",
        "type": "color",
        "description": "Button hover color"
      },
      "color-active": {
        "value": "{base.darkest}",
        "type": "color",
        "description": "Button active color"
      },
      "background": {
        "value": "{primary.light}",
        "type": "color",
        "description": "Button background color"
      },
      "background-hover": {
        "value": "{primary.lighter}",
        "type": "color",
        "description": "Button hover background color"
      },
      "background-active": {
        "value": "{primary.lighter}",
        "type": "color",
        "description": "Button active background color"
      },
      "inverse-color": {
        "value": "{link.reverse-color}",
        "type": "color",
        "description": "Button inverse color"
      },
      "inverse-hover-color": {
        "value": "{link.reverse-hover-color}",
        "type": "color",
        "description": "Button inverse hover color"
      },
      "inverse-active-color": {
        "value": "{link.reverse-active-color}",
        "type": "color",
        "description": "Button inverse active color"
      },
      "font-family": {
        "value": "{font.ui}",
        "type": "fontFamilies",
        "description": "Button font family"
      },
      "font-size": {
        "value": "{font-size.xs}",
        "type": "fontSizes",
        "description": "Button font size"
      },
      "line-height": {
        "value": "{line-height.3}",
        "type": "lineHeights",
        "description": "Button line height"
      },
      "lg-font-size": {
        "value": "{font-size.md}",
        "type": "fontSizes",
        "description": "Button font size"
      },
      "font-weight": {
        "value": "{font-weight.normal}",
        "type": "fontWeights",
        "description": "Button font weight"
      },
      "border-radius": {
        "value": "{border-radius.sm}",
        "type": "borderRadius",
        "description": "Button border radius"
      },
      "lg-border-radius": {
        "value": "{border-radius.md}",
        "type": "borderRadius",
        "description": "Button border radius"
      },
      "small-width": {
        "value": "{spacing.6}",
        "type": "sizing",
        "description": "Small button width"
      },
      "stroke-width": {
        "value": "{border-width.sm}",
        "type": "borderWidth",
        "description": "Button stroke width"
      },
      "outline-offset": {
        "value": "{focus.offset}",
        "type": "spacing",
        "description": "Button outline offset"
      },
      "padding-x": {
        "value": "{spacing.105}",
        "type": "spacing",
        "description": "Button padding x"
      },
      "padding-y": {
        "value": "{spacing.05}",
        "type": "spacing",
        "description": "Button padding y"
      },
      "lg-padding-x": {
        "value": "{spacing.205}",
        "type": "spacing",
        "description": "Button padding x"
      },
      "lg-padding-y": {
        "value": "{spacing.105}",
        "type": "spacing",
        "description": "Button padding y"
      },
      "margin-right": {
        "value": "{spacing.0}",
        "type": "spacing",
        "description": "Button margin right"
      },
      "icon-size": {
        "value": "{spacing.205}",
        "type": "sizing",
        "description": "Button icon size"
      },
      "lg-icon-size": {
        "value": "{spacing.3}",
        "type": "sizing",
        "description": "Button icon size"
      },
      "outline-background": {
        "value": "{transparent}",
        "type": "color",
        "description": "Button outline background"
      },
      "outline-background-hover": {
        "value": "{transparent}",
        "type": "color",
        "description": "Button outline hover background"
      },
      "outline-background-active": {
        "value": "{transparent}",
        "type": "color",
        "description": "Button outline active background"
      },
      "outline-color": {
        "value": "{primary}",
        "type": "color",
        "description": "Button outline color"
      },
      "outline-hover-color": {
        "value": "{primary.dark}",
        "type": "color",
        "description": "Button outline hover color"
      },
      "outline-active-color": {
        "value": "{primary.darker}",
        "type": "color",
        "description": "Button outline active color"
      },
      "outline-border-color": {
        "value": "{primary}",
        "type": "color",
        "description": "Button outline border color"
      },
      "outline-border-hover-color": {
        "value": "{primary.dark}",
        "type": "color",
        "description": "Button outline border hover color"
      },
      "outline-border-active-color": {
        "value": "{primary.darker}",
        "type": "color",
        "description": "Button outline border active color"
      }
    },
    "font-size": {
      "3xs": {
        "value": "12px",
        "type": "fontSizes",
        "description": "Smallest font size",
        "a11y": "--a11y-font-size-modifier",
        "responsiveFont": true
      },
      "2xs": {
        "value": "13px",
        "type": "fontSizes",
        "description": "Second smallest font size",
        "a11y": "--a11y-font-size-modifier",
        "responsiveFont": true
      },
      "xs": {
        "value": "14px",
        "type": "fontSizes",
        "description": "Extra small font size",
        "a11y": "--a11y-font-size-modifier",
        "responsiveFont": true
      },
      "sm": {
        "value": "15px",
        "type": "fontSizes",
        "description": "Small font size",
        "a11y": "--a11y-font-size-modifier",
        "responsiveFont": true
      },
      "md": {
        "value": "16px",
        "type": "fontSizes",
        "description": "Medium font size",
        "a11y": "--a11y-font-size-modifier",
        "responsiveFont": true
      },
      "lg": {
        "value": "20px",
        "type": "fontSizes",
        "description": "Large font size",
        "a11y": "--a11y-font-size-modifier",
        "responsiveFont": true
      },
      "xl": {
        "value": "24px",
        "type": "fontSizes",
        "description": "Extra large font size",
        "a11y": "--a11y-font-size-modifier",
        "responsiveFont": true
      },
      "2xl": {
        "value": "32px",
        "type": "fontSizes",
        "description": "Second largest font size",
        "a11y": "--a11y-font-size-modifier",
        "responsiveFont": true
      },
      "3xl": {
        "value": "44px",
        "type": "fontSizes",
        "description": "Largest font size",
        "a11y": "--a11y-font-size-modifier",
        "responsiveFont": true
      }
    },
    "font": {
      "sans": {
        "value": "'Public Sans Web', Helvetica Neue, Helvetica, Roboto, Arial, sans-serif",
        "type": "fontFamilies",
        "description": "System font family"
      },
      "serif": {
        "value": "Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif",
        "type": "fontFamilies",
        "description": "Serif font family"
      },
      "mono": {
        "value": "'Roboto Mono Web', \"Bitstream Vera Sans Mono\", \"Consolas\", \"Courier\", monospace",
        "type": "fontFamilies",
        "description": "Monospace font family"
      },
      "heading": {
        "value": "{font.sans}",
        "type": "fontFamilies",
        "description": "Heading font family"
      },
      "ui": {
        "value": "{font.sans}",
        "type": "fontFamilies",
        "description": "UI font family"
      },
      "code": {
        "value": "{font.mono}",
        "type": "fontFamilies",
        "description": "Code font family"
      },
      "alt": {
        "value": "{font.serif}",
        "type": "fontFamilies",
        "description": "Alternate font family"
      },
      "prose": {
        "value": "{font.sans}",
        "type": "fontFamilies",
        "description": "Prose font family"
      }
    },
    "font-weight": {
      "heavy": {
        "value": "900",
        "type": "fontWeights",
        "description": "Heaviest font weight"
      },
      "bold": {
        "value": "700",
        "type": "fontWeights",
        "description": "Bold font weight"
      },
      "semibold": {
        "value": "600",
        "type": "fontWeights",
        "description": "Semibold font weight"
      },
      "medium": {
        "value": "500",
        "type": "fontWeights",
        "description": "Medium font weight"
      },
      "normal": {
        "value": "400",
        "type": "fontWeights",
        "description": "Normal font weight"
      },
      "light": {
        "value": "300",
        "type": "fontWeights",
        "description": "Light font weight"
      },
      "thin": {
        "value": "100",
        "type": "fontWeights",
        "description": "Thinnest font weight"
      }
    },
    "body-font": {
      "size": {
        "value": "{font-size.md}",
        "type": "fontSizes",
        "description": "Body font size"
      },
      "family": {
        "value": "{font.sans}",
        "type": "fontFamilies",
        "description": "Body font family"
      },
      "weight": {
        "value": "{font-weight.normal}",
        "type": "fontWeights",
        "description": "Body font weight"
      },
      "line-height": {
        "value": "{line-height.5}",
        "type": "lineHeights",
        "description": "Body line height"
      },
      "letter-spacing": {
        "value": "{letter-spacing.1}",
        "type": "letterSpacing",
        "description": "Body letter spacing"
      },
      "paragraph-spacing": {
        "value": "{spacing.2}",
        "type": "spacing",
        "description": "Spacing between <p> elements with .usa-prose class"
      },
      "list-spacing": {
        "value": "{spacing.1}",
        "type": "spacing",
        "description": "Spacing between <ul> and <ol> child elements with .usa-prose class"
      }
    },
    "h1-font": {
      "size": {
        "value": "{font-size.xl}",
        "type": "fontSizes",
        "description": "H1 font size"
      },
      "family": {
        "value": "{font.mono}",
        "type": "fontFamilies",
        "description": "H1 font family"
      },
      "weight": {
        "value": "{font-weight.thin}",
        "type": "fontWeights",
        "description": "H1 font weight"
      },
      "line-height": {
        "value": "{line-height.2}",
        "type": "lineHeights",
        "description": "H1 line height"
      },
      "letter-spacing": {
        "value": "{letter-spacing.1}",
        "type": "letterSpacing",
        "description": "H1 letter spacing"
      },
      "paragraph-spacing": {
        "value": "{spacing.3}",
        "type": "spacing",
        "description": "Spacing between <h1> and other elements with .usa-prose class"
      }
    },
    "h2-font": {
      "size": {
        "value": "{font-size.2xl}",
        "type": "fontSizes",
        "description": "H2 font size"
      },
      "family": {
        "value": "{font.heading}",
        "type": "fontFamilies",
        "description": "H2 font family"
      },
      "weight": {
        "value": "{font-weight.bold}",
        "type": "fontWeights",
        "description": "H2 font weight"
      },
      "line-height": {
        "value": "{line-height.2}",
        "type": "lineHeights",
        "description": "H2 line height"
      },
      "letter-spacing": {
        "value": "{letter-spacing.1}",
        "type": "letterSpacing",
        "description": "H2 letter spacing"
      },
      "paragraph-spacing": {
        "value": "{spacing.3}",
        "type": "spacing",
        "description": "Spacing between <h2> and other elements with .usa-prose class"
      }
    },
    "h3-font": {
      "size": {
        "value": "{font-size.xl}",
        "type": "fontSizes",
        "description": "H3 font size"
      },
      "family": {
        "value": "{font.heading}",
        "type": "fontFamilies",
        "description": "H3 font family"
      },
      "weight": {
        "value": "{font-weight.bold}",
        "type": "fontWeights",
        "description": "H3 font weight"
      },
      "line-height": {
        "value": "{line-height.2}",
        "type": "lineHeights",
        "description": "H3 line height"
      },
      "letter-spacing": {
        "value": "{letter-spacing.1}",
        "type": "letterSpacing",
        "description": "H3 letter spacing"
      },
      "paragraph-spacing": {
        "value": "{spacing.3}",
        "type": "spacing",
        "description": "Spacing between <h3> and other elements with .usa-prose class"
      }
    },
    "h4-font": {
      "size": {
        "value": "{font-size.md}",
        "type": "fontSizes",
        "description": "H4 font size"
      },
      "family": {
        "value": "{font.heading}",
        "type": "fontFamilies",
        "description": "H4 font family"
      },
      "weight": {
        "value": "{font-weight.bold}",
        "type": "fontWeights",
        "description": "H4 font weight"
      },
      "line-height": {
        "value": "{line-height.2}",
        "type": "lineHeights",
        "description": "H4 line height"
      },
      "letter-spacing": {
        "value": "{letter-spacing.1}",
        "type": "letterSpacing",
        "description": "H4 letter spacing"
      },
      "paragraph-spacing": {
        "value": "{spacing.3}",
        "type": "spacing",
        "description": "Spacing between <h4> and other elements with .usa-prose class"
      }
    },
    "h5-font": {
      "size": {
        "value": "{font-size.sm}",
        "type": "fontSizes",
        "description": "H5 font size"
      },
      "family": {
        "value": "{font.heading}",
        "type": "fontFamilies",
        "description": "H5 font family"
      },
      "weight": {
        "value": "{font-weight.bold}",
        "type": "fontWeights",
        "description": "H5 font weight"
      },
      "line-height": {
        "value": "{line-height.2}",
        "type": "lineHeights",
        "description": "H5 line height"
      },
      "letter-spacing": {
        "value": "{letter-spacing.1}",
        "type": "letterSpacing",
        "description": "H5 letter spacing"
      },
      "paragraph-spacing": {
        "value": "{spacing.3}",
        "type": "spacing",
        "description": "Spacing between <h5> and other elements with .usa-prose class"
      }
    },
    "h6-font": {
      "size": {
        "value": "{font-size.2xs}",
        "type": "fontSizes",
        "description": "H6 font size"
      },
      "family": {
        "value": "{font.sans}",
        "type": "fontFamilies",
        "description": "H6 font family"
      },
      "weight": {
        "value": "{font-weight.normal}",
        "type": "fontWeights",
        "description": "H6 font weight"
      },
      "line-height": {
        "value": "{line-height.2}",
        "type": "lineHeights",
        "description": "H6 line height"
      },
      "letter-spacing": {
        "value": "{letter-spacing.2}",
        "type": "letterSpacing",
        "description": "H6 letter spacing"
      },
      "text-transform": {
        "value": "uppercase",
        "type": "textTransform",
        "description": "H6 text transform"
      },
      "paragraph-spacing": {
        "value": "{spacing.3}",
        "type": "spacing",
        "description": "Spacing between <h6> and other elements with .usa-prose class"
      }
    },
    "letter-spacing": {
      "0": {
        "value": "0em",
        "type": "letterSpacing",
        "description": "0 letter spacing"
      },
      "1": {
        "value": "0.025em",
        "type": "letterSpacing",
        "description": "Slightly larger letter spacing",
        "a11y": "--a11y-letter-spacing-modifier"
      },
      "2": {
        "value": "0.1em",
        "type": "letterSpacing",
        "description": "Large letter spacing",
        "a11y": "--a11y-letter-spacing-modifier"
      },
      "3": {
        "value": "0.15em",
        "type": "letterSpacing",
        "description": "Largest letter spacing",
        "a11y": "--a11y-letter-spacing-modifier"
      },
      "neg-3": {
        "value": "-0.03em",
        "type": "letterSpacing",
        "description": "Smallest letter spacing",
        "a11y": "--a11y-letter-spacing-modifier"
      },
      "neg-2": {
        "value": "-0.02em",
        "type": "letterSpacing",
        "description": "Small letter spacing",
        "a11y": "--a11y-letter-spacing-modifier"
      },
      "neg-1": {
        "value": "-0.01em",
        "type": "letterSpacing",
        "description": "Slightly smaller letter spacing",
        "a11y": "--a11y-letter-spacing-modifier"
      },
      "auto": {
        "value": "initial",
        "type": "letterSpacing",
        "description": "Auto letter spacing"
      }
    },
    "lead-font": {
      "size": {
        "value": "{font-size.lg}",
        "type": "fontSizes",
        "description": "Lead font size"
      },
      "family": {
        "value": "{body-font.family}",
        "type": "fontFamilies",
        "description": "Lead font family"
      },
      "weight": {
        "value": "{font-weight.medium}",
        "type": "fontWeights",
        "description": "Lead font weight"
      },
      "line-height": {
        "value": "{line-height.3}",
        "type": "lineHeights",
        "description": "Lead line height"
      },
      "letter-spacing": {
        "value": "{letter-spacing.0}",
        "type": "letterSpacing",
        "description": "Lead letter spacing"
      },
      "max-width": {
        "value": "{measure.base}",
        "type": "maxWidth",
        "description": "Lead max width"
      },
      "paragraph-spacing": {
        "value": "{spacing.3}",
        "type": "spacing",
        "description": "Spacing between .usa-intro and other elements within .usa-prose class"
      }
    },
    "body": {
      "background": {
        "value": "{base.darkest}",
        "type": "color",
        "description": "Body background color"
      },
      "ink": {
        "value": "{base.lightest}",
        "type": "color",
        "description": "Body text color"
      }
    },
    "table": {
      "border-width": {
        "value": "{spacing.1px}",
        "type": "sizing",
        "description": "Table border width"
      },
      "cell-compact-padding-x": {
        "value": "{spacing.05}",
        "type": "sizing",
        "description": "Table cell compact padding x"
      },
      "cell-compact-padding-y": {
        "value": "{spacing.2px}",
        "type": "sizing",
        "description": "Table cell compact padding y"
      },
      "cell-padding-x": {
        "value": "{spacing.105}",
        "type": "sizing",
        "description": "Table cell padding x"
      },
      "cell-padding-y": {
        "value": "{spacing.05}",
        "type": "sizing",
        "description": "Table cell padding y"
      },
      "unsorted-icon-hover-color": {
        "value": "{base.dark}",
        "type": "color",
        "description": "Table unsorted icon hover color"
      },
      "unsorted-icon-color": {
        "value": "{base}",
        "type": "color",
        "description": "Table unsorted icon color"
      },
      "sorted-stripe-background-color": {
        "value": "{primary.light}",
        "type": "color",
        "description": "Table sorted stripe background color"
      },
      "sorted-background-color": {
        "value": "{primary}",
        "type": "color",
        "description": "Table sorted background color"
      },
      "sorted-header-background-color": {
        "value": "{primary.light}",
        "type": "color",
        "description": "Table sorted header background color"
      },
      "text-hover-color": {
        "value": "{base.lighter}",
        "type": "color",
        "description": "Table text hover color"
      },
      "stripe-background-color": {
        "value": "{black}",
        "type": "color",
        "description": "Table stripe background color"
      },
      "header-background-color": {
        "value": "{black}",
        "type": "color",
        "description": "Table header background color"
      },
      "border-color": {
        "value": "{base.darker}",
        "type": "color",
        "description": "Table border color"
      },
      "sorted-icon-color": {
        "value": "{table.text-color}",
        "type": "color",
        "description": "Table sorted icon color"
      },
      "sorted-header-text-color": {
        "value": "{table.text-color}",
        "type": "color",
        "description": "Table sorted header text color"
      },
      "text-color": {
        "value": "{body.ink}",
        "type": "color",
        "description": "Table text color"
      },
      "stripe-text-color": {
        "value": "{table.text-color}",
        "type": "color",
        "description": "Table stripe text color"
      },
      "header-text-color": {
        "value": "{white}",
        "type": "color",
        "description": "Table header text color"
      },
      "sorted-text-color": {
        "value": "{table.text-color}",
        "type": "color",
        "description": "Table sorted text color"
      },
      "font-size": {
        "value": "{font-size.sm}",
        "type": "fontSizes",
        "description": "Table font size"
      },
      "font-family": {
        "value": "{font.body}",
        "type": "fontFamilies",
        "description": "Table font family"
      },
      "line-height": {
        "value": "{line-height.2}",
        "type": "lineHeights",
        "description": "Table line height"
      },
      "font-weight": {
        "value": "{font-weight.normal}",
        "type": "fontWeights",
        "description": "Table font weight"
      },
      "header-font-size": {
        "value": "{font-size.sm}",
        "type": "fontSizes",
        "description": "Table header font size"
      },
      "header-font-family": {
        "value": "{font.body}",
        "type": "fontFamilies",
        "description": "Table header font family"
      },
      "header-font-weight": {
        "value": "{font-weight.semibold}",
        "type": "fontWeights",
        "description": "Table header font weight"
      },
      "header-line-height": {
        "value": "{line-height.3}",
        "type": "lineHeights",
        "description": "Table header line height"
      },
      "margin-y": {
        "value": "{spacing.205}",
        "type": "sizing",
        "description": "Table margin y"
      },
      "caption-margin-bottom": {
        "value": "{spacing.105}",
        "type": "sizing",
        "description": "Table caption margin bottom"
      },
      "caption-font-size": {
        "value": "{font-size.xs}",
        "type": "fontSizes",
        "description": "Table caption font size"
      },
      "caption-font-family": {
        "value": "{font.body}",
        "type": "fontFamilies",
        "description": "Table caption font family"
      },
      "caption-font-weight": {
        "value": "{font-weight.bold}",
        "type": "fontWeights",
        "description": "Table caption font weight"
      },
      "caption-text-align": {
        "value": "left",
        "type": "textAlignment",
        "description": "Table caption text align"
      },
      "caption-line-height": {
        "value": "{line-height.3}",
        "type": "lineHeights",
        "description": "Table caption line height"
      }
    },
    "sidenav": {
      "item-font-size": {
        "value": "{font-size.sm}",
        "type": "fontSizes",
        "description": "Side navigation item font size"
      },
      "item-font-family": {
        "value": "{font.sans}",
        "type": "fontFamilies",
        "description": "Side navigation item font family"
      },
      "item-font-weight": {
        "value": "{font-weight.normal}",
        "type": "fontWeights",
        "description": "Side navigation item font weight"
      },
      "item-font-weight-current": {
        "value": "{font-weight.medium}",
        "type": "fontWeights",
        "description": "Side navigation item font weight current"
      },
      "item-line-height": {
        "value": "{line-height.3}",
        "type": "lineHeights",
        "description": "Side navigation item line height"
      },
      "item-text-align": {
        "value": "right",
        "type": "textAlign",
        "description": "Side navigation item text align"
      },
      "sublist-font-size": {
        "value": "{sidenav.item-font-size}",
        "type": "fontSizes",
        "description": "Side navigation sublist font size"
      },
      "sublist-font-weight": {
        "value": "{sidenav.item-font-weight}",
        "type": "fontWeights",
        "description": "Side navigation sublist font weight"
      },
      "sublist-font-weight-current": {
        "value": "{sidenav.item-font-weight-current}",
        "type": "fontWeights",
        "description": "Side navigation sublist font weight current"
      },
      "sublist-line-height": {
        "value": "{sidenav.item-line-height}",
        "type": "lineHeights",
        "description": "Side navigation sublist line height"
      },
      "sublist-font-family": {
        "value": "{sidenav.item-font-family}",
        "type": "fontFamilies",
        "description": "Side navigation sublist font family"
      },
      "item-background": {
        "value": "{body.background}",
        "type": "colors",
        "description": "Side navigation item background"
      },
      "item-background-hover": {
        "value": "{black}",
        "type": "colors",
        "description": "Side navigation item background hover"
      },
      "item-background-current": {
        "value": "{sidenav.item-background}",
        "type": "colors",
        "description": "Side navigation item background current"
      },
      "sublist-background": {
        "value": "{sidenav.item-background}",
        "type": "colors",
        "description": "Side navigation sublist background"
      },
      "sublist-background-hover": {
        "value": "{sidenav.item-background-hover}",
        "type": "colors",
        "description": "Side navigation sublist background hover"
      },
      "sublist-background-current": {
        "value": "{sidenav.item-background-current}",
        "type": "colors",
        "description": "Side navigation sublist background current"
      },
      "border-color": {
        "value": "{body.background}",
        "type": "colors",
        "description": "Side navigation item border color"
      },
      "border-width": {
        "value": "{border-width.0}",
        "type": "borderWidths",
        "description": "Side navigation item border width"
      },
      "border-radius": {
        "value": "{border-radius.0}",
        "type": "borderRadius",
        "description": "Side navigation item border radius"
      },
      "item-border-color": {
        "value": "{body.background}",
        "type": "colors",
        "description": "Side navigation item border color"
      },
      "item-border-width": {
        "value": "{border-width.1px}",
        "type": "borderWidths",
        "description": "Side navigation item border width"
      },
      "sublist-border-color": {
        "value": "{sidenav.item-border-color}",
        "type": "colors",
        "description": "Side navigation sublist border color"
      },
      "sublist-border-width": {
        "value": "{sidenav.item-border-width}",
        "type": "borderWidths",
        "description": "Side navigation sublist border width"
      },
      "item-padding-x": {
        "value": "{spacing.2}",
        "type": "spacing",
        "description": "Side navigation item padding x"
      },
      "item-padding-y": {
        "value": "{spacing.1}",
        "type": "spacing",
        "description": "Side navigation item padding y"
      },
      "item-margin-bottom": {
        "value": "{spacing.0}",
        "type": "spacing",
        "description": "Side navigation item margin bottom"
      },
      "item-margin-top": {
        "value": "{spacing.0}",
        "type": "spacing",
        "description": "Side navigation item margin top"
      },
      "item-color": {
        "value": "{ink}",
        "type": "colors",
        "description": "Side navigation item color"
      },
      "item-color-hover": {
        "value": "{primary.lightest}",
        "type": "colors",
        "description": "Side navigation item color hover"
      },
      "item-color-current": {
        "value": "{primary.light}",
        "type": "colors",
        "description": "Side navigation item color current"
      },
      "item-text-decoration": {
        "value": "none",
        "type": "textDecoration",
        "description": "Side navigation item text decoration"
      },
      "sublist-item-color": {
        "value": "{sidenav.item-color}",
        "type": "colors",
        "description": "Side navigation sublist item color"
      },
      "sublist-item-color-hover": {
        "value": "{sidenav.item-color-hover}",
        "type": "colors",
        "description": "Side navigation sublist item color hover"
      },
      "sublist-item-color-current": {
        "value": "{sidenav.item-color-current}",
        "type": "colors",
        "description": "Side navigation sublist item color current"
      },
      "sublist-item-text-decoration": {
        "value": "{sidenav.item-text-decoration}",
        "type": "textDecoration",
        "description": "Side navigation sublist item text decoration"
      },
      "item-focus-outline-offset": {
        "value": "0",
        "type": "spacing",
        "description": "Side navigation item focus outline offset"
      },
      "item-current-indicator-color": {
        "value": "{primary}",
        "type": "colors",
        "description": "Side navigation item current indicator color"
      },
      "item-current-indicator-border-radius": {
        "value": "{border-radius.pill}",
        "type": "borderRadius",
        "description": "Side navigation item current indicator border radius"
      },
      "item-current-indicator-width": {
        "value": "{spacing.05}",
        "type": "sizing",
        "description": "Side navigation item current indicator width"
      },
      "item-current-indicator-position": {
        "value": "100%",
        "type": "spacing",
        "description": "Side navigation item current indicator position. 0 is left, 100% is right."
      },
      "child-padding-left": {
        "value": "{spacing.0}",
        "type": "spacing",
        "description": "Side navigation child padding left"
      },
      "child-padding-right": {
        "value": "{spacing.105}",
        "type": "spacing",
        "description": "Side navigation child padding left"
      },
      "child-padding-multiplier": {
        "value": "2",
        "type": "spacing",
        "description": "Side navigation child padding left multiplier"
      }
    }
  },
  "coi": {
    "accordion": {
      "background-color": {
        "value": "{white}",
        "type": "color",
        "description": "Accordion content background color"
      },
      "content-color": {
        "value": "{base.darkest}",
        "type": "color",
        "description": "Accordion content background color"
      },
      "border-color": {
        "value": "{primary.lighter}",
        "type": "color",
        "description": "Accordion border color"
      },
      "border-width": {
        "value": "{border-width.lg}",
        "type": "borderWidth",
        "description": "Accordion border width"
      },
      "button-background": {
        "value": "{primary.lighter}",
        "type": "color",
        "description": "Accordion button background color"
      },
      "button-color": {
        "value": "{base.darkest}",
        "type": "color",
        "description": "Accordion button color"
      },
      "button-active-background": {
        "value": "{primary.lighter}",
        "type": "color",
        "description": "Active accordion button background color"
      },
      "button-active-color": {
        "value": "{primary.darker}",
        "type": "color",
        "description": "Active accordion button color"
      },
      "button-hover-background": {
        "value": "{primary.lighter}",
        "type": "color",
        "description": "Hover accordion background color"
      },
      "button-hover-color": {
        "value": "{primary.darker}",
        "type": "color",
        "description": "Hover accordion color"
      },
      "button-icon-size": {
        "value": "{spacing.3}",
        "type": "sizing",
        "description": "Accordion button icon size"
      },
      "button-padding-y": {
        "value": "{spacing.2}",
        "type": "spacing",
        "description": "Accordion button padding y"
      },
      "button-padding-x": {
        "value": "{spacing.205}",
        "type": "spacing",
        "description": "Accordion button padding x"
      },
      "button-font-family": {
        "value": "{font.body}",
        "type": "fontFamilies",
        "description": "Accordion font family"
      },
      "button-font-weight": {
        "value": "{font.weight-semibold}",
        "type": "fontWeight",
        "description": "Accordion font weight"
      },
      "button-font-size": {
        "value": "{body-font.size}",
        "type": "fontSizes",
        "description": "Accordion font size"
      },
      "button-line-height": {
        "value": "{body-font.line-height}",
        "type": "lineHeight",
        "description": "Accordion line height"
      },
      "padding-y": {
        "value": "{spacing.2}",
        "type": "spacing",
        "description": "Accordion padding y"
      },
      "padding-x": {
        "value": "{spacing.205}",
        "type": "spacing",
        "description": "Accordion padding x"
      },
      "border-radius": {
        "value": "{border-radius.md}",
        "type": "borderRadius",
        "description": "Accordion border radius"
      }
    },
    "primary": {
      "lightest": {
        "value": "#EEEFFB",
        "type": "color",
        "description": "Primary lightest color"
      },
      "lighter": {
        "value": "#D7D8EA",
        "type": "color",
        "description": "Primary lighter color"
      },
      "light": {
        "value": "#9C9CDE",
        "type": "color",
        "description": "Primary light color"
      },
      "base": {
        "value": "#565ADB",
        "type": "color",
        "description": "Primary color"
      },
      "vivid": {
        "value": "#565ADB",
        "type": "color",
        "description": "Vivid primary color"
      },
      "dark": {
        "value": "#4247AC",
        "type": "color",
        "description": "Primary dark color"
      },
      "darker": {
        "value": "#1D1F49",
        "type": "color",
        "description": "Primary darker color"
      },
      "darkest": {
        "value": "#1E1E1E",
        "type": "color",
        "description": "Primary darkest color"
      }
    },
    "button": {
      "color": {
        "value": "{ink}",
        "type": "color",
        "description": "Button color"
      },
      "color-hover": {
        "value": "{ink}",
        "type": "color",
        "description": "Button hover color"
      },
      "color-active": {
        "value": "{ink}",
        "type": "color",
        "description": "Button active color"
      },
      "background": {
        "value": "{primary}",
        "type": "color",
        "description": "Button background color"
      },
      "background-hover": {
        "value": "{primary.dark}",
        "type": "color",
        "description": "Button hover background color"
      },
      "background-active": {
        "value": "{primary.dark}",
        "type": "color",
        "description": "Button active background color"
      },
      "inverse-color": {
        "value": "{link.reverse-color}",
        "type": "color",
        "description": "Button inverse color"
      },
      "inverse-hover-color": {
        "value": "{link.reverse-hover-color}",
        "type": "color",
        "description": "Button inverse hover color"
      },
      "inverse-active-color": {
        "value": "{link.reverse-active-color}",
        "type": "color",
        "description": "Button inverse active color"
      },
      "font-family": {
        "value": "{font.ui}",
        "type": "fontFamilies",
        "description": "Button font family"
      },
      "font-size": {
        "value": "{font-size.md}",
        "type": "fontSizes",
        "description": "Button font size"
      },
      "line-height": {
        "value": "{line-height.3}",
        "type": "lineHeights",
        "description": "Button line height"
      },
      "lg-font-size": {
        "value": "{font-size.lg}",
        "type": "fontSizes",
        "description": "Button font size"
      },
      "font-weight": {
        "value": "{font-weight.medium}",
        "type": "fontWeights",
        "description": "Button font weight"
      },
      "border-radius": {
        "value": "{border-radius.sm}",
        "type": "borderRadius",
        "description": "Button border radius"
      },
      "lg-border-radius": {
        "value": "{border-radius.lg}",
        "type": "borderRadius",
        "description": "Button border radius"
      },
      "small-width": {
        "value": "{spacing.6}",
        "type": "sizing",
        "description": "Small button width"
      },
      "stroke-width": {
        "value": "{border-width.md}",
        "type": "borderWidth",
        "description": "Button stroke width"
      },
      "outline-offset": {
        "value": "{focus.offset}",
        "type": "spacing",
        "description": "Button outline offset"
      },
      "padding-x": {
        "value": "{spacing.205}",
        "type": "spacing",
        "description": "Button padding x"
      },
      "padding-y": {
        "value": "{spacing.105}",
        "type": "spacing",
        "description": "Button padding y"
      },
      "lg-padding-x": {
        "value": "{spacing.205}",
        "type": "spacing",
        "description": "Button padding x"
      },
      "lg-padding-y": {
        "value": "{spacing.105}",
        "type": "spacing",
        "description": "Button padding y"
      },
      "margin-right": {
        "value": "{spacing.0}",
        "type": "spacing",
        "description": "Button margin right"
      },
      "icon-size": {
        "value": "{spacing.205}",
        "type": "sizing",
        "description": "Button icon size"
      },
      "lg-icon-size": {
        "value": "{spacing.3}",
        "type": "sizing",
        "description": "Button icon size"
      },
      "outline-background": {
        "value": "{transparent}",
        "type": "color",
        "description": "Button outline background"
      },
      "outline-background-hover": {
        "value": "{transparent}",
        "type": "color",
        "description": "Button outline hover background"
      },
      "outline-background-active": {
        "value": "{transparent}",
        "type": "color",
        "description": "Button outline active background"
      },
      "outline-color": {
        "value": "{primary.light}",
        "type": "color",
        "description": "Button outline color"
      },
      "outline-hover-color": {
        "value": "{primary.lighter}",
        "type": "color",
        "description": "Button outline hover color"
      },
      "outline-active-color": {
        "value": "{primary.lighter}",
        "type": "color",
        "description": "Button outline active color"
      },
      "outline-border-color": {
        "value": "{primary.dark}",
        "type": "color",
        "description": "Button outline border color"
      },
      "outline-border-hover-color": {
        "value": "{primary.base}",
        "type": "color",
        "description": "Button outline border hover color"
      },
      "outline-border-active-color": {
        "value": "{primary.base}",
        "type": "color",
        "description": "Button outline border active color"
      }
    },
    "font-size": {
      "3xs": {
        "value": "14px",
        "type": "fontSizes",
        "description": "Smallest font size",
        "a11y": "--a11y-font-size-modifier",
        "responsiveFont": true
      },
      "2xs": {
        "value": "14px",
        "type": "fontSizes",
        "description": "Second smallest font size",
        "a11y": "--a11y-font-size-modifier",
        "responsiveFont": true
      },
      "xs": {
        "value": "15px",
        "type": "fontSizes",
        "description": "Extra small font size",
        "a11y": "--a11y-font-size-modifier",
        "responsiveFont": true
      },
      "sm": {
        "value": "16px",
        "type": "fontSizes",
        "description": "Small font size",
        "a11y": "--a11y-font-size-modifier",
        "responsiveFont": true
      },
      "md": {
        "value": "18px",
        "type": "fontSizes",
        "description": "Medium font size",
        "a11y": "--a11y-font-size-modifier",
        "responsiveFont": true
      },
      "lg": {
        "value": "24px",
        "type": "fontSizes",
        "description": "Large font size",
        "a11y": "--a11y-font-size-modifier",
        "responsiveFont": true
      },
      "xl": {
        "value": "36px",
        "type": "fontSizes",
        "description": "Extra large font size",
        "a11y": "--a11y-font-size-modifier",
        "responsiveFont": true
      },
      "2xl": {
        "value": "48px",
        "type": "fontSizes",
        "description": "Second largest font size",
        "a11y": "--a11y-font-size-modifier",
        "responsiveFont": true
      },
      "3xl": {
        "value": "56px",
        "type": "fontSizes",
        "description": "Largest font size",
        "a11y": "--a11y-font-size-modifier",
        "responsiveFont": true
      }
    },
    "font": {
      "sans": {
        "value": "'Montserrat', Helvetica Neue, Helvetica, Roboto, Arial, sans-serif",
        "type": "fontFamilies",
        "description": "System font family"
      },
      "serif": {
        "value": "Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif",
        "type": "fontFamilies",
        "description": "Serif font family"
      },
      "mono": {
        "value": "'Roboto Mono Web', \"Bitstream Vera Sans Mono\", \"Consolas\", \"Courier\", monospace",
        "type": "fontFamilies",
        "description": "Monospace font family"
      },
      "heading": {
        "value": "{font.sans}",
        "type": "fontFamilies",
        "description": "Heading font family"
      },
      "ui": {
        "value": "{font.sans}",
        "type": "fontFamilies",
        "description": "UI font family"
      },
      "code": {
        "value": "{font.mono}",
        "type": "fontFamilies",
        "description": "Code font family"
      },
      "alt": {
        "value": "{font.serif}",
        "type": "fontFamilies",
        "description": "Alternate font family"
      },
      "prose": {
        "value": "{font.sans}",
        "type": "fontFamilies",
        "description": "Prose font family"
      }
    },
    "font-weight": {
      "heavy": {
        "value": "900",
        "type": "fontWeights",
        "description": "Heaviest font weight"
      },
      "bold": {
        "value": "700",
        "type": "fontWeights",
        "description": "Bold font weight"
      },
      "semibold": {
        "value": "600",
        "type": "fontWeights",
        "description": "Semibold font weight"
      },
      "medium": {
        "value": "400",
        "type": "fontWeights",
        "description": "Medium font weight"
      },
      "normal": {
        "value": "300",
        "type": "fontWeights",
        "description": "Normal font weight"
      },
      "light": {
        "value": "100",
        "type": "fontWeights",
        "description": "Light font weight"
      },
      "thin": {
        "value": "100",
        "type": "fontWeights",
        "description": "Thinnest font weight"
      }
    },
    "body-font": {
      "size": {
        "value": "{font-size.md}",
        "type": "fontSizes",
        "description": "Body font size"
      },
      "family": {
        "value": "{font.sans}",
        "type": "fontFamilies",
        "description": "Body font family"
      },
      "weight": {
        "value": "{font-weight.normal}",
        "type": "fontWeights",
        "description": "Body font weight"
      },
      "line-height": {
        "value": "{line-height.4}",
        "type": "lineHeights",
        "description": "Body line height"
      },
      "letter-spacing": {
        "value": "{letter-spacing.1}",
        "type": "letterSpacing",
        "description": "Body letter spacing"
      },
      "paragraph-spacing": {
        "value": "{spacing.2}",
        "type": "spacing",
        "description": "Spacing between <p> elements with .usa-prose class"
      },
      "list-spacing": {
        "value": "{spacing.1}",
        "type": "spacing",
        "description": "Spacing between <ul> and <ol> child elements with .usa-prose class"
      }
    },
    "h1-font": {
      "size": {
        "value": "{font-size.2xl}",
        "type": "fontSizes",
        "description": "H1 font size"
      },
      "family": {
        "value": "{font.heading}",
        "type": "fontFamilies",
        "description": "H1 font family"
      },
      "weight": {
        "value": "{font-weight.semibold}",
        "type": "fontWeights",
        "description": "H1 font weight"
      },
      "line-height": {
        "value": "{line-height.2}",
        "type": "lineHeights",
        "description": "H1 line height"
      },
      "letter-spacing": {
        "value": "{letter-spacing.1}",
        "type": "letterSpacing",
        "description": "H1 letter spacing"
      },
      "paragraph-spacing": {
        "value": "{spacing.3}",
        "type": "spacing",
        "description": "Spacing between <h1> and other elements with .usa-prose class"
      }
    },
    "h2-font": {
      "size": {
        "value": "{font-size.xl}",
        "type": "fontSizes",
        "description": "H2 font size"
      },
      "family": {
        "value": "{font.heading}",
        "type": "fontFamilies",
        "description": "H2 font family"
      },
      "weight": {
        "value": "{font-weight.semibold}",
        "type": "fontWeights",
        "description": "H2 font weight"
      },
      "line-height": {
        "value": "{line-height.3}",
        "type": "lineHeights",
        "description": "H2 line height"
      },
      "letter-spacing": {
        "value": "{letter-spacing.1}",
        "type": "letterSpacing",
        "description": "H2 letter spacing"
      },
      "paragraph-spacing": {
        "value": "{spacing.3}",
        "type": "spacing",
        "description": "Spacing between <h2> and other elements with .usa-prose class"
      }
    },
    "h3-font": {
      "size": {
        "value": "{font-size.lg}",
        "type": "fontSizes",
        "description": "H3 font size"
      },
      "family": {
        "value": "{font.heading}",
        "type": "fontFamilies",
        "description": "H3 font family"
      },
      "weight": {
        "value": "{font-weight.medium}",
        "type": "fontWeights",
        "description": "H3 font weight"
      },
      "line-height": {
        "value": "{line-height.3}",
        "type": "lineHeights",
        "description": "H3 line height"
      },
      "letter-spacing": {
        "value": "{letter-spacing.1}",
        "type": "letterSpacing",
        "description": "H3 letter spacing"
      },
      "paragraph-spacing": {
        "value": "{spacing.3}",
        "type": "spacing",
        "description": "Spacing between <h3> and other elements with .usa-prose class"
      }
    },
    "h4-font": {
      "size": {
        "value": "{font-size.md}",
        "type": "fontSizes",
        "description": "H4 font size"
      },
      "family": {
        "value": "{font.heading}",
        "type": "fontFamilies",
        "description": "H4 font family"
      },
      "weight": {
        "value": "{font-weight.semibold}",
        "type": "fontWeights",
        "description": "H4 font weight"
      },
      "line-height": {
        "value": "{line-height.3}",
        "type": "lineHeights",
        "description": "H4 line height"
      },
      "letter-spacing": {
        "value": "{letter-spacing.1}",
        "type": "letterSpacing",
        "description": "H4 letter spacing"
      },
      "paragraph-spacing": {
        "value": "{spacing.3}",
        "type": "spacing",
        "description": "Spacing between <h4> and other elements with .usa-prose class"
      }
    },
    "h5-font": {
      "size": {
        "value": "{font-size.sm}",
        "type": "fontSizes",
        "description": "H5 font size"
      },
      "family": {
        "value": "{font.heading}",
        "type": "fontFamilies",
        "description": "H5 font family"
      },
      "weight": {
        "value": "{font-weight.semibold}",
        "type": "fontWeights",
        "description": "H5 font weight"
      },
      "line-height": {
        "value": "{line-height.3}",
        "type": "lineHeights",
        "description": "H5 line height"
      },
      "letter-spacing": {
        "value": "{letter-spacing.1}",
        "type": "letterSpacing",
        "description": "H5 letter spacing"
      },
      "paragraph-spacing": {
        "value": "{spacing.3}",
        "type": "spacing",
        "description": "Spacing between <h5> and other elements with .usa-prose class"
      }
    },
    "h6-font": {
      "size": {
        "value": "{font-size.2xs}",
        "type": "fontSizes",
        "description": "H6 font size"
      },
      "family": {
        "value": "{font.sans}",
        "type": "fontFamilies",
        "description": "H6 font family"
      },
      "weight": {
        "value": "{font-weight.normal}",
        "type": "fontWeights",
        "description": "H6 font weight"
      },
      "line-height": {
        "value": "{line-height.3}",
        "type": "lineHeights",
        "description": "H6 line height"
      },
      "letter-spacing": {
        "value": "{letter-spacing.2}",
        "type": "letterSpacing",
        "description": "H6 letter spacing"
      },
      "text-transform": {
        "value": "uppercase",
        "type": "textTransform",
        "description": "H6 text transform"
      },
      "paragraph-spacing": {
        "value": "{spacing.3}",
        "type": "spacing",
        "description": "Spacing between <h6> and other elements with .usa-prose class"
      }
    },
    "letter-spacing": {
      "0": {
        "value": "0em",
        "type": "letterSpacing",
        "description": "0 letter spacing"
      },
      "1": {
        "value": "0.025em",
        "type": "letterSpacing",
        "description": "Slightly larger letter spacing",
        "a11y": "--a11y-letter-spacing-modifier"
      },
      "2": {
        "value": "0.1em",
        "type": "letterSpacing",
        "description": "Large letter spacing",
        "a11y": "--a11y-letter-spacing-modifier"
      },
      "3": {
        "value": "0.15em",
        "type": "letterSpacing",
        "description": "Largest letter spacing",
        "a11y": "--a11y-letter-spacing-modifier"
      },
      "neg-3": {
        "value": "-0.03em",
        "type": "letterSpacing",
        "description": "Smallest letter spacing",
        "a11y": "--a11y-letter-spacing-modifier"
      },
      "neg-2": {
        "value": "-0.02em",
        "type": "letterSpacing",
        "description": "Small letter spacing",
        "a11y": "--a11y-letter-spacing-modifier"
      },
      "neg-1": {
        "value": "-0.01em",
        "type": "letterSpacing",
        "description": "Slightly smaller letter spacing",
        "a11y": "--a11y-letter-spacing-modifier"
      },
      "auto": {
        "value": "initial",
        "type": "letterSpacing",
        "description": "Auto letter spacing"
      }
    },
    "lead-font": {
      "size": {
        "value": "{font-size.lg}",
        "type": "fontSizes",
        "description": "Lead font size"
      },
      "family": {
        "value": "{body-font.family}",
        "type": "fontFamilies",
        "description": "Lead font family"
      },
      "weight": {
        "value": "{font-weight.normal}",
        "type": "fontWeights",
        "description": "Lead font weight"
      },
      "line-height": {
        "value": "{body-font.line-height}",
        "type": "lineHeights",
        "description": "Lead line height"
      },
      "letter-spacing": {
        "value": "{letter-spacing.1}",
        "type": "letterSpacing",
        "description": "Lead letter spacing"
      },
      "max-width": {
        "value": "{measure.small}",
        "type": "maxWidth",
        "description": "Lead max width"
      },
      "paragraph-spacing": {
        "value": "{spacing.3}",
        "type": "spacing",
        "description": "Spacing between .usa-intro and other elements within .usa-prose class"
      }
    },
    "body": {
      "background": {
        "value": "{base.darkest}",
        "type": "color",
        "description": "Body background color"
      },
      "ink": {
        "value": "{white}",
        "type": "color",
        "description": "Body text color"
      }
    },
    "table": {
      "border-width": {
        "value": "{spacing.2px}",
        "type": "sizing",
        "description": "Table border width"
      },
      "cell-compact-padding-x": {
        "value": "{spacing.1}",
        "type": "sizing",
        "description": "Table cell compact padding x"
      },
      "cell-compact-padding-y": {
        "value": "{spacing.05}",
        "type": "sizing",
        "description": "Table cell compact padding y"
      },
      "cell-padding-x": {
        "value": "{spacing.2}",
        "type": "sizing",
        "description": "Table cell padding x"
      },
      "cell-padding-y": {
        "value": "{spacing.1}",
        "type": "sizing",
        "description": "Table cell padding y"
      },
      "unsorted-icon-hover-color": {
        "value": "{base.dark}",
        "type": "color",
        "description": "Table unsorted icon hover color"
      },
      "unsorted-icon-color": {
        "value": "{base}",
        "type": "color",
        "description": "Table unsorted icon color"
      },
      "sorted-stripe-background-color": {
        "value": "{accent-cool.lighter}",
        "type": "color",
        "description": "Table sorted stripe background color"
      },
      "sorted-background-color": {
        "value": "{accent-cool.lighter}",
        "type": "color",
        "description": "Table sorted background color"
      },
      "sorted-header-background-color": {
        "value": "{accent-cool.light}",
        "type": "color",
        "description": "Table sorted header background color"
      },
      "text-hover-color": {
        "value": "{base.dark}",
        "type": "color",
        "description": "Table text hover color"
      },
      "stripe-background-color": {
        "value": "{base.darker}",
        "type": "color",
        "description": "Table stripe background color"
      },
      "header-background-color": {
        "value": "{base.lighter}",
        "type": "color",
        "description": "Table header background color"
      },
      "border-color": {
        "value": "{body.ink}",
        "type": "color",
        "description": "Table border color"
      },
      "sorted-icon-color": {
        "value": "{table.text-color}",
        "type": "color",
        "description": "Table sorted icon color"
      },
      "sorted-header-text-color": {
        "value": "{table.text-color}",
        "type": "color",
        "description": "Table sorted header text color"
      },
      "text-color": {
        "value": "{body.ink}",
        "type": "color",
        "description": "Table text color"
      },
      "stripe-text-color": {
        "value": "{table.text-color}",
        "type": "color",
        "description": "Table stripe text color"
      },
      "header-text-color": {
        "value": "{table.text-color}",
        "type": "color",
        "description": "Table header text color"
      },
      "sorted-text-color": {
        "value": "{table.text-color}",
        "type": "color",
        "description": "Table sorted text color"
      },
      "font-size": {
        "value": "{font-size.sm}",
        "type": "fontSizes",
        "description": "Table font size"
      },
      "font-family": {
        "value": "{font.body}",
        "type": "fontFamilies",
        "description": "Table font family"
      },
      "line-height": {
        "value": "{line-height.2}",
        "type": "lineHeights",
        "description": "Table line height"
      },
      "font-weight": {
        "value": "{font-weight.normal}",
        "type": "fontWeights",
        "description": "Table font weight"
      },
      "header-font-size": {
        "value": "{font-size.sm}",
        "type": "fontSizes",
        "description": "Table header font size"
      },
      "header-font-family": {
        "value": "{font.body}",
        "type": "fontFamilies",
        "description": "Table header font family"
      },
      "header-font-weight": {
        "value": "{font-weight.semibold}",
        "type": "fontWeights",
        "description": "Table header font weight"
      },
      "header-line-height": {
        "value": "{line-height.3}",
        "type": "lineHeights",
        "description": "Table header line height"
      },
      "margin-y": {
        "value": "{spacing.205}",
        "type": "sizing",
        "description": "Table margin y"
      },
      "caption-margin-bottom": {
        "value": "{spacing.105}",
        "type": "sizing",
        "description": "Table caption margin bottom"
      },
      "caption-font-size": {
        "value": "{font-size.xs}",
        "type": "fontSizes",
        "description": "Table caption font size"
      },
      "caption-font-family": {
        "value": "{font.body}",
        "type": "fontFamilies",
        "description": "Table caption font family"
      },
      "caption-font-weight": {
        "value": "{font-weight.bold}",
        "type": "fontWeights",
        "description": "Table caption font weight"
      },
      "caption-text-align": {
        "value": "left",
        "type": "textAlignment",
        "description": "Table caption text align"
      },
      "caption-line-height": {
        "value": "{line-height.3}",
        "type": "lineHeights",
        "description": "Table caption line height"
      }
    },
    "sidenav": {
      "item-font-size": {
        "value": "{font-size.sm}",
        "type": "fontSizes",
        "description": "Side navigation item font size"
      },
      "item-font-family": {
        "value": "{font.sans}",
        "type": "fontFamilies",
        "description": "Side navigation item font family"
      },
      "item-font-weight": {
        "value": "{font-weight.normal}",
        "type": "fontWeights",
        "description": "Side navigation item font weight"
      },
      "item-font-weight-current": {
        "value": "{font-weight.medium}",
        "type": "fontWeights",
        "description": "Side navigation item font weight current"
      },
      "item-line-height": {
        "value": "{line-height.3}",
        "type": "lineHeights",
        "description": "Side navigation item line height"
      },
      "item-text-align": {
        "value": "right",
        "type": "textAlign",
        "description": "Side navigation item text align"
      },
      "sublist-font-size": {
        "value": "{sidenav.item-font-size}",
        "type": "fontSizes",
        "description": "Side navigation sublist font size"
      },
      "sublist-font-weight": {
        "value": "{sidenav.item-font-weight}",
        "type": "fontWeights",
        "description": "Side navigation sublist font weight"
      },
      "sublist-font-weight-current": {
        "value": "{sidenav.item-font-weight-current}",
        "type": "fontWeights",
        "description": "Side navigation sublist font weight current"
      },
      "sublist-line-height": {
        "value": "{sidenav.item-line-height}",
        "type": "lineHeights",
        "description": "Side navigation sublist line height"
      },
      "sublist-font-family": {
        "value": "{sidenav.item-font-family}",
        "type": "fontFamilies",
        "description": "Side navigation sublist font family"
      },
      "item-background": {
        "value": "{body.background}",
        "type": "colors",
        "description": "Side navigation item background"
      },
      "item-background-hover": {
        "value": "{black}",
        "type": "colors",
        "description": "Side navigation item background hover"
      },
      "item-background-current": {
        "value": "{sidenav.item-background}",
        "type": "colors",
        "description": "Side navigation item background current"
      },
      "sublist-background": {
        "value": "{sidenav.item-background}",
        "type": "colors",
        "description": "Side navigation sublist background"
      },
      "sublist-background-hover": {
        "value": "{sidenav.item-background-hover}",
        "type": "colors",
        "description": "Side navigation sublist background hover"
      },
      "sublist-background-current": {
        "value": "{sidenav.item-background-current}",
        "type": "colors",
        "description": "Side navigation sublist background current"
      },
      "border-color": {
        "value": "{body.background}",
        "type": "colors",
        "description": "Side navigation item border color"
      },
      "border-width": {
        "value": "{border-width.0}",
        "type": "borderWidths",
        "description": "Side navigation item border width"
      },
      "border-radius": {
        "value": "{border-radius.0}",
        "type": "borderRadius",
        "description": "Side navigation item border radius"
      },
      "item-border-color": {
        "value": "{body.background}",
        "type": "colors",
        "description": "Side navigation item border color"
      },
      "item-border-width": {
        "value": "{border-width.1px}",
        "type": "borderWidths",
        "description": "Side navigation item border width"
      },
      "sublist-border-color": {
        "value": "{sidenav.item-border-color}",
        "type": "colors",
        "description": "Side navigation sublist border color"
      },
      "sublist-border-width": {
        "value": "{sidenav.item-border-width}",
        "type": "borderWidths",
        "description": "Side navigation sublist border width"
      },
      "item-padding-x": {
        "value": "{spacing.2}",
        "type": "spacing",
        "description": "Side navigation item padding x"
      },
      "item-padding-y": {
        "value": "{spacing.1}",
        "type": "spacing",
        "description": "Side navigation item padding y"
      },
      "item-margin-bottom": {
        "value": "{spacing.0}",
        "type": "spacing",
        "description": "Side navigation item margin bottom"
      },
      "item-margin-top": {
        "value": "{spacing.0}",
        "type": "spacing",
        "description": "Side navigation item margin top"
      },
      "item-color": {
        "value": "{ink}",
        "type": "colors",
        "description": "Side navigation item color"
      },
      "item-color-hover": {
        "value": "{primary.lightest}",
        "type": "colors",
        "description": "Side navigation item color hover"
      },
      "item-color-current": {
        "value": "{primary.light}",
        "type": "colors",
        "description": "Side navigation item color current"
      },
      "item-text-decoration": {
        "value": "none",
        "type": "textDecoration",
        "description": "Side navigation item text decoration"
      },
      "sublist-item-color": {
        "value": "{sidenav.item-color}",
        "type": "colors",
        "description": "Side navigation sublist item color"
      },
      "sublist-item-color-hover": {
        "value": "{sidenav.item-color-hover}",
        "type": "colors",
        "description": "Side navigation sublist item color hover"
      },
      "sublist-item-color-current": {
        "value": "{sidenav.item-color-current}",
        "type": "colors",
        "description": "Side navigation sublist item color current"
      },
      "sublist-item-text-decoration": {
        "value": "{sidenav.item-text-decoration}",
        "type": "textDecoration",
        "description": "Side navigation sublist item text decoration"
      },
      "item-focus-outline-offset": {
        "value": "0",
        "type": "spacing",
        "description": "Side navigation item focus outline offset"
      },
      "item-current-indicator-color": {
        "value": "{primary}",
        "type": "colors",
        "description": "Side navigation item current indicator color"
      },
      "item-current-indicator-border-radius": {
        "value": "{border-radius.pill}",
        "type": "borderRadius",
        "description": "Side navigation item current indicator border radius"
      },
      "item-current-indicator-width": {
        "value": "{spacing.05}",
        "type": "sizing",
        "description": "Side navigation item current indicator width"
      },
      "item-current-indicator-position": {
        "value": "100%",
        "type": "spacing",
        "description": "Side navigation item current indicator position. 0 is left, 100% is right."
      },
      "child-padding-left": {
        "value": "{spacing.0}",
        "type": "spacing",
        "description": "Side navigation child padding left"
      },
      "child-padding-right": {
        "value": "{spacing.105}",
        "type": "spacing",
        "description": "Side navigation child padding left"
      },
      "child-padding-multiplier": {
        "value": "2",
        "type": "spacing",
        "description": "Side navigation child padding left multiplier"
      }
    },
    "input": {
      "font-family": {
        "value": "{font.ui}",
        "type": "fontFamilies",
        "description": "Font family"
      },
      "font-size": {
        "value": "{body-font.size}",
        "type": "fontSizes",
        "description": "Font size"
      },
      "font-weight": {
        "value": "{font-weight.medium}",
        "type": "fontWeights",
        "description": "Font weight"
      },
      "line-height": {
        "value": "{line-height.3}",
        "type": "lineHeights",
        "description": "Line height"
      },
      "letter-spacing": {
        "value": "{body-font.letter-spacing}",
        "type": "letterSpacing",
        "description": "Letter spacing"
      },
      "height": {
        "value": "{spacing.6}",
        "type": "sizes",
        "description": "Height"
      },
      "select-size": {
        "value": "{spacing.3}",
        "type": "sizes",
        "description": "Select size"
      },
      "select-caret-color": {
        "value": "{input.color}",
        "type": "colors",
        "description": "Select caret color"
      },
      "max-width": {
        "value": "{spacing.mobile-lg}",
        "type": "sizes",
        "description": "Max width"
      },
      "margin-top": {
        "value": "{spacing.1}",
        "type": "spacing",
        "description": "Margin top"
      },
      "padding-x": {
        "value": "{spacing.2}",
        "type": "spacing",
        "description": "Padding x"
      },
      "padding-y": {
        "value": "{spacing.1}",
        "type": "spacing",
        "description": "Padding y"
      },
      "large-height": {
        "value": "{spacing.7}",
        "type": "sizing",
        "description": "Large height"
      },
      "border-width": {
        "value": "{border-width.0}",
        "type": "borderWidths",
        "description": "Border width"
      },
      "border-color": {
        "value": "{border-color.base}",
        "type": "colors",
        "description": "Border color"
      },
      "border-color-hover": {
        "value": "{border-color.base}",
        "type": "colors",
        "description": "Border color hover"
      },
      "color": {
        "value": "{black}",
        "type": "colors",
        "description": "Color"
      },
      "placeholder-color": {
        "value": "{base.dark}",
        "type": "colors",
        "description": "Placeholder color"
      },
      "background-color": {
        "value": "{base.lighter}",
        "type": "colors",
        "description": "Background color"
      },
      "border-radius": {
        "value": "{border-radius.md}",
        "type": "borderRadius",
        "description": "Border radius"
      },
      "search-min-width": {
        "value": "27ch",
        "type": "sizes",
        "description": "Search min width"
      },
      "disabled-border-color": {
        "value": "{disabled.light}",
        "type": "colors",
        "description": "Disabled border color"
      },
      "disabled-border-color-hover": {
        "value": "{input.disabled-border-color}",
        "type": "colors",
        "description": "Disabled border color hover"
      },
      "disabled-color": {
        "value": "{disabled}",
        "type": "colors",
        "description": "Disabled color"
      },
      "disabled-background-color": {
        "value": "{disabled.lighter}",
        "type": "colors",
        "description": "Disabled background color"
      },
      "label-font-size": {
        "value": "{font-size.md}",
        "type": "fontSizes",
        "description": "Label font size"
      },
      "label-font-family": {
        "value": "{font.ui}",
        "type": "fontFamilies",
        "description": "Label font family"
      },
      "label-font-weight": {
        "value": "{font-weight.medium}",
        "type": "fontWeights",
        "description": "Label font weight"
      },
      "label-color": {
        "value": "{base.dark}",
        "type": "colors",
        "description": "Label color"
      },
      "label-line-height": {
        "value": "{line-height.3}",
        "type": "lineHeights",
        "description": "Label line height"
      },
      "label-margin-bottom": {
        "value": "{spacing.0}",
        "type": "spacing",
        "description": "Label margin bottom"
      },
      "label-margin-top": {
        "value": "{spacing.0}",
        "type": "spacing",
        "description": "Label margin top"
      }
    },
    "base": {
      "lightest": {
        "value": "#f5f5f5",
        "type": "color",
        "description": "Base lightest color"
      },
      "lighter": {
        "value": "#e1e1e1",
        "type": "color",
        "description": "Base lighter color"
      },
      "light": {
        "value": "#bdbdbd",
        "type": "color",
        "description": "Base light color"
      },
      "base": {
        "value": "#9e9e9e",
        "type": "color",
        "description": "Base color"
      },
      "dark": {
        "value": "#616161",
        "type": "color",
        "description": "Base dark color"
      },
      "darker": {
        "value": "#424242",
        "type": "color",
        "description": "Base darker color"
      },
      "darkest": {
        "value": "#1E1E1E",
        "type": "color",
        "description": "Base darkest color"
      }
    },
    "border": {
      "radius-0": {
        "value": "{spacing.0}",
        "type": "borderRadius",
        "description": "No border radius"
      },
      "radius-sm": {
        "value": "{spacing.05}",
        "type": "borderRadius",
        "description": "Small border radius"
      },
      "radius-md": {
        "value": "{spacing.1}",
        "type": "borderRadius",
        "description": "Medium border radius"
      },
      "radius-lg": {
        "value": "{spacing.2}",
        "type": "borderRadius",
        "description": "Large border radius"
      },
      "radius-pill": {
        "value": "{spacing.tablet}",
        "type": "borderRadius",
        "description": "Pill border radius"
      },
      "color-lighter": {
        "value": "{base.lightesr}",
        "type": "color",
        "description": "Border lighter color"
      },
      "color-light": {
        "value": "{base.lighter}",
        "type": "color",
        "description": "Border light color"
      },
      "color-base": {
        "value": "{base.light}",
        "type": "color",
        "description": "Border color"
      },
      "color-dark": {
        "value": "{base}",
        "type": "color",
        "description": "Border dark color"
      },
      "color-darker": {
        "value": "{base.dark}",
        "type": "color",
        "description": "Border darker color"
      },
      "width-0": {
        "value": "{spacing.0}",
        "type": "borderWidth",
        "description": "No border width"
      },
      "width-sm": {
        "value": "{spacing.1px}",
        "type": "borderWidth",
        "description": "Small border width"
      },
      "width-md": {
        "value": "{spacing.2px}",
        "type": "borderWidth",
        "description": "Medium border width"
      },
      "width-lg": {
        "value": "{spacing.05}",
        "type": "borderWidth",
        "description": "Large border width"
      }
    },
    "radio": {
      "size": {
        "value": "{spacing.205}",
        "type": "size",
        "description": "Radio button size"
      },
      "gap": {
        "value": "{spacing.1}",
        "type": "size",
        "description": "Radio button gap"
      },
      "background-color": {
        "value": "{body.background-color}",
        "type": "color",
        "description": "Radio button background color"
      },
      "label-color": {
        "value": "{ink}",
        "type": "color",
        "description": "Radio button label color"
      },
      "label-font-family": {
        "value": "{input.font-family}",
        "type": "fontFamilies",
        "description": "Radio button label font family"
      },
      "label-font-size": {
        "value": "{input.font-size}",
        "type": "fontSizes",
        "description": "Radio button label font size"
      },
      "label-font-weight": {
        "value": "{input.font-weight}",
        "type": "fontWeights",
        "description": "Radio button label font weight"
      },
      "label-line-height": {
        "value": "{input.line-height}",
        "type": "lineHeights",
        "description": "Radio button label line height"
      },
      "label-letter-spacing": {
        "value": "{input.letter-spacing}",
        "type": "letterSpacing",
        "description": "Radio button label letter spacing"
      },
      "border-color": {
        "value": "{base.dark}",
        "type": "color",
        "description": "Radio button border color"
      },
      "border-width": {
        "value": "{border-width.sm}",
        "type": "size",
        "description": "Radio button border width"
      },
      "border-radius": {
        "value": "{border-radius.pill}",
        "type": "size",
        "description": "Radio button border radius"
      },
      "checked-background-color": {
        "value": "{secondary}",
        "type": "color",
        "description": "Radio button checked background color"
      },
      "checked-border-color": {
        "value": "{secondary}",
        "type": "color",
        "description": "Radio button checked border color"
      },
      "focus-border-color": {
        "value": "{input.focus-border-color}",
        "type": "color",
        "description": "Radio button focus border color"
      },
      "focus-border-width": {
        "value": "{input.focus-border-width}",
        "type": "size",
        "description": "Radio button focus border width"
      },
      "disabled-background-color": {
        "value": "{input.disabled-background-color}",
        "type": "color",
        "description": "Radio button disabled background color"
      },
      "disabled-border-color": {
        "value": "{input.disabled-border-color}",
        "type": "color",
        "description": "Radio button disabled border color"
      },
      "disabled-color": {
        "value": "{input.disabled-color}",
        "type": "color",
        "description": "Radio button disabled color"
      },
      "tile-padding-y": {
        "value": "{spacing.2}",
        "type": "size",
        "description": "Radio button tile padding y"
      },
      "tile-padding-x": {
        "value": "{spacing.2}",
        "type": "size",
        "description": "Radio button tile padding y"
      },
      "tile-background-color": {
        "value": "{radio.background-color}",
        "type": "color",
        "description": "Radio button tile background color"
      },
      "tile-label-color": {
        "value": "{radio.label-color}",
        "type": "color",
        "description": "Radio button tile label color"
      },
      "tile-border-radius": {
        "value": "{input.border-radius}",
        "type": "size",
        "description": "Radio button tile border radius"
      },
      "tile-border-color": {
        "value": "{radio.border-color}",
        "type": "color",
        "description": "Radio button tile border color"
      },
      "tile-border-width": {
        "value": "{radio.border-width}",
        "type": "size",
        "description": "Radio button tile border width"
      },
      "tile-checked-background-color": {
        "value": "{primary.lightest}",
        "type": "color",
        "description": "Radio button tile checked background color"
      },
      "tile-checked-border-color": {
        "value": "{radio.checked-border-color}",
        "type": "color",
        "description": "Radio button tile checked border color"
      }
    },
    "secondary": {
      "lightest": {
        "value": "#FFFFB8",
        "type": "color",
        "description": "Secondary lightest color"
      },
      "lighter": {
        "value": "#FFFF9A",
        "type": "color",
        "description": "Secondary lighter color"
      },
      "light": {
        "value": "#FFEA7C",
        "type": "color",
        "description": "Secondary light color"
      },
      "base": {
        "value": "#E1CC5E",
        "type": "color",
        "description": "Secondary color"
      },
      "vivid": {
        "value": "#E1CC5E",
        "type": "color",
        "description": "Vivid secondary color"
      },
      "dark": {
        "value": "#C3AE40",
        "type": "color",
        "description": "Secondary dark color"
      },
      "darker": {
        "value": "#A59022",
        "type": "color",
        "description": "Secondary darker color"
      },
      "darkest": {
        "value": "#877204",
        "type": "color",
        "description": "Secondary darkest color"
      }
    }
  },
  "adapt": {
    "accordion": {
      "background-color": {
        "value": "{body.background}",
        "type": "color",
        "description": "Accordion content background color"
      },
      "content-color": {
        "value": "{ink}",
        "type": "color",
        "description": "Accordion content background color"
      },
      "border-color": {
        "value": "{base.lighter}",
        "type": "color",
        "description": "Accordion border color"
      },
      "border-width": {
        "value": "{spacing.05}",
        "type": "borderWidth",
        "description": "Accordion border width"
      },
      "button-background": {
        "value": "{base.lighter}",
        "type": "color",
        "description": "Accordion button background color"
      },
      "button-color": {
        "value": "{link.color}",
        "type": "color",
        "description": "Accordion button color"
      },
      "button-active-background": {
        "value": "{base.lightest}",
        "type": "color",
        "description": "Active accordion button background color"
      },
      "button-active-color": {
        "value": "{link.active-color}",
        "type": "color",
        "description": "Active accordion button color"
      },
      "button-hover-background": {
        "value": "{base.lighter}",
        "type": "color",
        "description": "Hover accordion background color"
      },
      "button-hover-color": {
        "value": "{link.hover-color}",
        "type": "color",
        "description": "Hover accordion color"
      },
      "button-icon-size": {
        "value": "{spacing.3}",
        "type": "sizing",
        "description": "Accordion button icon size"
      },
      "button-padding-y": {
        "value": "{spacing.2}",
        "type": "spacing",
        "description": "Accordion button padding y"
      },
      "button-padding-x": {
        "value": "{spacing.205}",
        "type": "spacing",
        "description": "Accordion button padding x"
      },
      "button-font-family": {
        "value": "{font.body}",
        "type": "fontFamilies",
        "description": "Accordion font family"
      },
      "button-font-weight": {
        "value": "{font.weight-semibold}",
        "type": "fontWeight",
        "description": "Accordion font weight"
      },
      "button-font-size": {
        "value": "{font.size-body}",
        "type": "fontSizes",
        "description": "Accordion font size"
      },
      "button-line-height": {
        "value": "{line-height.body}",
        "type": "lineHeight",
        "description": "Accordion line height"
      },
      "padding-y": {
        "value": "{spacing.2}",
        "type": "spacing",
        "description": "Accordion padding y"
      },
      "padding-x": {
        "value": "{spacing.205}",
        "type": "spacing",
        "description": "Accordion padding x"
      },
      "border-radius": {
        "value": "{border-radius.0}",
        "type": "borderRadius",
        "description": "Accordion border radius"
      }
    },
    "primary": {
      "lightest": {
        "value": "{color.blue.5}",
        "type": "color",
        "description": "Primary lightest color"
      },
      "lighter": {
        "value": "{color.indigo-cool.10}",
        "type": "color",
        "description": "Primary lighter color"
      },
      "light": {
        "value": "{color.indigo-cool.30}",
        "type": "color",
        "description": "Primary light color"
      },
      "base": {
        "value": "{color.indigo-cool.vivid.70}",
        "type": "color",
        "description": "Primary color"
      },
      "vivid": {
        "value": "{color.indigo-cool.vivid.70}",
        "type": "color",
        "description": "Vivid primary color"
      },
      "dark": {
        "value": "{color.indigo-cool.vivid.80}",
        "type": "color",
        "description": "Primary dark color"
      },
      "darker": {
        "value": "{color.indigo-warm.90}",
        "type": "color",
        "description": "Primary darker color"
      },
      "darkest": {
        "value": "{body.ink}",
        "type": "color",
        "description": "Primary darkest color"
      }
    },
    "accent-cool": {
      "lightest": {
        "value": "{color.mint-cool.5}",
        "type": "color",
        "description": "Accent cool lightest color"
      },
      "lighter": {
        "value": "{color.mint-cool.vivid.5}",
        "type": "color",
        "description": "Accent cool lighter color"
      },
      "light": {
        "value": "{color.mint-cool.vivid.20}",
        "type": "color",
        "description": "Accent cool light color"
      },
      "base": {
        "value": "{color.mint.vivid.30}",
        "type": "color",
        "description": "Accent cool color"
      },
      "dark": {
        "value": "{color.mint-cool.vivid.40}",
        "type": "color",
        "description": "Accent cool dark color"
      },
      "darker": {
        "value": "{color.mint-cool.vivid.60}",
        "type": "color",
        "description": "Accent cool darker color"
      },
      "darkest": {
        "value": "{color.mint-cool.vivid.80}",
        "type": "color",
        "description": "Accent cool darkest color"
      }
    },
    "accent-warm": {
      "lightest": {
        "value": "{color.orange.5}",
        "type": "color",
        "description": "Accent warm lightest color"
      },
      "lighter": {
        "value": "{color.orange.10}",
        "type": "color",
        "description": "Accent warm lighter color"
      },
      "light": {
        "value": "{color.orange.vivid.20}",
        "type": "color",
        "description": "Accent warm light color"
      },
      "base": {
        "value": "{color.orange.vivid.30}",
        "type": "color",
        "description": "Accent warm color"
      },
      "dark": {
        "value": "{color.orange.vivid.50}",
        "type": "color",
        "description": "Accent warm dark color"
      },
      "darker": {
        "value": "{color.orange.60}",
        "type": "color",
        "description": "Accent warm darker color"
      },
      "darkest": {
        "value": "{color.orange.80}",
        "type": "color",
        "description": "Accent warm darkest color"
      }
    },
    "button": {
      "color": {
        "value": "{white}",
        "type": "color",
        "description": "Button color"
      },
      "color-hover": {
        "value": "{white}",
        "type": "color",
        "description": "Button hover color"
      },
      "color-active": {
        "value": "{white}",
        "type": "color",
        "description": "Button active color"
      },
      "background": {
        "value": "{primary}",
        "type": "color",
        "description": "Button background color"
      },
      "background-hover": {
        "value": "{primary.dark}",
        "type": "color",
        "description": "Button hover background color"
      },
      "background-active": {
        "value": "{primary.darker}",
        "type": "color",
        "description": "Button active background color"
      },
      "inverse-color": {
        "value": "{link.reverse-color}",
        "type": "color",
        "description": "Button inverse color"
      },
      "inverse-hover-color": {
        "value": "{link.reverse-hover-color}",
        "type": "color",
        "description": "Button inverse hover color"
      },
      "inverse-active-color": {
        "value": "{link.reverse-active-color}",
        "type": "color",
        "description": "Button inverse active color"
      },
      "font-family": {
        "value": "{font.ui}",
        "type": "fontFamilies",
        "description": "Button font family"
      },
      "font-size": {
        "value": "{font-size.sm}",
        "type": "fontSizes",
        "description": "Button font size"
      },
      "line-height": {
        "value": "{line-height.3}",
        "type": "lineHeights",
        "description": "Button line height"
      },
      "lg-font-size": {
        "value": "{font-size.md}",
        "type": "fontSizes",
        "description": "Button font size"
      },
      "font-weight": {
        "value": "{font-weight.bold}",
        "type": "fontWeights",
        "description": "Button font weight"
      },
      "border-radius": {
        "value": "{border-radius.md}",
        "type": "borderRadius",
        "description": "Button border radius"
      },
      "lg-border-radius": {
        "value": "{border-radius.md}",
        "type": "borderRadius",
        "description": "Button border radius"
      },
      "small-width": {
        "value": "{spacing.6}",
        "type": "sizing",
        "description": "Small button width"
      },
      "stroke-width": {
        "value": "{border-width.2px}",
        "type": "borderWidth",
        "description": "Button stroke width"
      },
      "outline-offset": {
        "value": "{focus.offset}",
        "type": "spacing",
        "description": "Button outline offset"
      },
      "padding-x": {
        "value": "{spacing.205}",
        "type": "spacing",
        "description": "Button padding x"
      },
      "padding-y": {
        "value": "{spacing.105}",
        "type": "spacing",
        "description": "Button padding y"
      },
      "lg-padding-x": {
        "value": "{spacing.205}",
        "type": "spacing",
        "description": "Button padding x"
      },
      "lg-padding-y": {
        "value": "{spacing.105}",
        "type": "spacing",
        "description": "Button padding y"
      },
      "margin-right": {
        "value": "{spacing.0}",
        "type": "spacing",
        "description": "Button margin right"
      },
      "icon-size": {
        "value": "{spacing.3}",
        "type": "sizing",
        "description": "Button icon size"
      },
      "lg-icon-size": {
        "value": "{spacing.4}",
        "type": "sizing",
        "description": "Button icon size"
      },
      "outline-background": {
        "value": "{transparent}",
        "type": "color",
        "description": "Button outline background"
      },
      "outline-background-hover": {
        "value": "{transparent}",
        "type": "color",
        "description": "Button outline hover background"
      },
      "outline-background-active": {
        "value": "{transparent}",
        "type": "color",
        "description": "Button outline active background"
      },
      "outline-color": {
        "value": "{primary}",
        "type": "color",
        "description": "Button outline color"
      },
      "outline-hover-color": {
        "value": "{primary.dark}",
        "type": "color",
        "description": "Button outline hover color"
      },
      "outline-active-color": {
        "value": "{primary.darker}",
        "type": "color",
        "description": "Button outline active color"
      },
      "outline-border-color": {
        "value": "{primary}",
        "type": "color",
        "description": "Button outline border color"
      },
      "outline-border-hover-color": {
        "value": "{primary.dark}",
        "type": "color",
        "description": "Button outline border hover color"
      },
      "outline-border-active-color": {
        "value": "{primary.darker}",
        "type": "color",
        "description": "Button outline border active color"
      }
    },
    "font-size": {
      "3xs": {
        "value": "12px",
        "type": "fontSizes",
        "description": "Smallest font size",
        "a11y": "--a11y-font-size-modifier",
        "responsiveFont": true
      },
      "2xs": {
        "value": "14px",
        "type": "fontSizes",
        "description": "Second smallest font size",
        "a11y": "--a11y-font-size-modifier",
        "responsiveFont": true
      },
      "xs": {
        "value": "15px",
        "type": "fontSizes",
        "description": "Extra small font size",
        "a11y": "--a11y-font-size-modifier",
        "responsiveFont": true
      },
      "sm": {
        "value": "16px",
        "type": "fontSizes",
        "description": "Small font size",
        "a11y": "--a11y-font-size-modifier",
        "responsiveFont": true
      },
      "md": {
        "value": "18px",
        "type": "fontSizes",
        "description": "Medium font size",
        "a11y": "--a11y-font-size-modifier",
        "responsiveFont": true
      },
      "lg": {
        "value": "22px",
        "type": "fontSizes",
        "description": "Large font size",
        "a11y": "--a11y-font-size-modifier",
        "responsiveFont": true
      },
      "xl": {
        "value": "32px",
        "type": "fontSizes",
        "description": "Extra large font size",
        "a11y": "--a11y-font-size-modifier",
        "responsiveFont": true
      },
      "2xl": {
        "value": "40px",
        "type": "fontSizes",
        "description": "Second largest font size",
        "a11y": "--a11y-font-size-modifier",
        "responsiveFont": true
      },
      "3xl": {
        "value": "48px",
        "type": "fontSizes",
        "description": "Largest font size",
        "a11y": "--a11y-font-size-modifier",
        "responsiveFont": true
      }
    },
    "line-height": {
      "1": {
        "value": "100%",
        "type": "lineHeight",
        "description": "Smallest line height",
        "a11y": "--a11y-line-height-modifier"
      },
      "2": {
        "value": "110%",
        "type": "lineHeight",
        "description": "Second smallest line height",
        "a11y": "--a11y-line-height-modifier"
      },
      "3": {
        "value": "125%",
        "type": "lineHeight",
        "description": "Regular line height",
        "a11y": "--a11y-line-height-modifier"
      },
      "4": {
        "value": "140%",
        "type": "lineHeight",
        "description": "Large line height",
        "a11y": "--a11y-line-height-modifier"
      },
      "5": {
        "value": "150%",
        "type": "lineHeight",
        "description": "Larger line height",
        "a11y": "--a11y-line-height-modifier"
      },
      "6": {
        "value": "175%",
        "type": "lineHeight",
        "description": "Largest line height",
        "a11y": "--a11y-line-height-modifier"
      }
    },
    "font": {
      "sans": {
        "value": "'Public Sans Web', Helvetica Neue, Helvetica, Roboto, Arial, sans-serif",
        "type": "fontFamilies",
        "description": "System font family"
      },
      "serif": {
        "value": "Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif",
        "type": "fontFamilies",
        "description": "Serif font family"
      },
      "mono": {
        "value": "'Roboto Mono Web', \"Bitstream Vera Sans Mono\", \"Consolas\", \"Courier\", monospace",
        "type": "fontFamilies",
        "description": "Monospace font family"
      },
      "heading": {
        "value": "{font.sans}",
        "type": "fontFamilies",
        "description": "Heading font family"
      },
      "ui": {
        "value": "{font.sans}",
        "type": "fontFamilies",
        "description": "UI font family"
      },
      "code": {
        "value": "{font.mono}",
        "type": "fontFamilies",
        "description": "Code font family"
      },
      "alt": {
        "value": "{font.serif}",
        "type": "fontFamilies",
        "description": "Alternate font family"
      },
      "prose": {
        "value": "{font.sans}",
        "type": "fontFamilies",
        "description": "Prose font family"
      }
    },
    "font-weight": {
      "heavy": {
        "value": "900",
        "type": "fontWeights",
        "description": "Heaviest font weight"
      },
      "bold": {
        "value": "700",
        "type": "fontWeights",
        "description": "Bold font weight"
      },
      "semibold": {
        "value": "600",
        "type": "fontWeights",
        "description": "Semibold font weight"
      },
      "medium": {
        "value": "500",
        "type": "fontWeights",
        "description": "Medium font weight"
      },
      "normal": {
        "value": "400",
        "type": "fontWeights",
        "description": "Normal font weight"
      },
      "light": {
        "value": "300",
        "type": "fontWeights",
        "description": "Light font weight"
      },
      "thin": {
        "value": "100",
        "type": "fontWeights",
        "description": "Thinnest font weight"
      }
    },
    "body-font": {
      "size": {
        "value": "{font-size.sm}",
        "type": "fontSizes",
        "description": "Body font size"
      },
      "family": {
        "value": "{font.sans}",
        "type": "fontFamilies",
        "description": "Body font family"
      },
      "weight": {
        "value": "{font-weight.normal}",
        "type": "fontWeights",
        "description": "Body font weight"
      },
      "line-height": {
        "value": "{line-height.5}",
        "type": "lineHeights",
        "description": "Body line height"
      },
      "letter-spacing": {
        "value": "{letter-spacing.1}",
        "type": "letterSpacing",
        "description": "Body letter spacing"
      },
      "paragraph-spacing": {
        "value": "{spacing.2}",
        "type": "spacing",
        "description": "Spacing between <p> elements with .usa-prose class"
      },
      "list-spacing": {
        "value": "{spacing.1}",
        "type": "spacing",
        "description": "Spacing between <ul> and <ol> child elements with .usa-prose class"
      }
    },
    "h1-font": {
      "size": {
        "value": "{font-size.2xl}",
        "type": "fontSizes",
        "description": "H1 font size"
      },
      "family": {
        "value": "{font.heading}",
        "type": "fontFamilies",
        "description": "H1 font family"
      },
      "weight": {
        "value": "{font-weight.bold}",
        "type": "fontWeights",
        "description": "H1 font weight"
      },
      "line-height": {
        "value": "{line-height.3}",
        "type": "lineHeights",
        "description": "H1 line height"
      },
      "letter-spacing": {
        "value": "{letter-spacing.1}",
        "type": "letterSpacing",
        "description": "H1 letter spacing"
      },
      "paragraph-spacing": {
        "value": "{spacing.3}",
        "type": "spacing",
        "description": "Spacing between <h1> and other elements with .usa-prose class"
      }
    },
    "h2-font": {
      "size": {
        "value": "{font-size.xl}",
        "type": "fontSizes",
        "description": "H2 font size"
      },
      "family": {
        "value": "{font.heading}",
        "type": "fontFamilies",
        "description": "H2 font family"
      },
      "weight": {
        "value": "{font-weight.bold}",
        "type": "fontWeights",
        "description": "H2 font weight"
      },
      "line-height": {
        "value": "{line-height.3}",
        "type": "lineHeights",
        "description": "H2 line height"
      },
      "letter-spacing": {
        "value": "{letter-spacing.1}",
        "type": "letterSpacing",
        "description": "H2 letter spacing"
      },
      "paragraph-spacing": {
        "value": "{spacing.3}",
        "type": "spacing",
        "description": "Spacing between <h2> and other elements with .usa-prose class"
      }
    },
    "h3-font": {
      "size": {
        "value": "{font-size.lg}",
        "type": "fontSizes",
        "description": "H3 font size"
      },
      "family": {
        "value": "{font.heading}",
        "type": "fontFamilies",
        "description": "H3 font family"
      },
      "weight": {
        "value": "{font-weight.bold}",
        "type": "fontWeights",
        "description": "H3 font weight"
      },
      "line-height": {
        "value": "{line-height.3}",
        "type": "lineHeights",
        "description": "H3 line height"
      },
      "letter-spacing": {
        "value": "{letter-spacing.1}",
        "type": "letterSpacing",
        "description": "H3 letter spacing"
      },
      "paragraph-spacing": {
        "value": "{spacing.3}",
        "type": "spacing",
        "description": "Spacing between <h3> and other elements with .usa-prose class"
      }
    },
    "h4-font": {
      "size": {
        "value": "{font-size.sm}",
        "type": "fontSizes",
        "description": "H4 font size"
      },
      "family": {
        "value": "{font.heading}",
        "type": "fontFamilies",
        "description": "H4 font family"
      },
      "weight": {
        "value": "{font-weight.bold}",
        "type": "fontWeights",
        "description": "H4 font weight"
      },
      "line-height": {
        "value": "{line-height.3}",
        "type": "lineHeights",
        "description": "H4 line height"
      },
      "letter-spacing": {
        "value": "{letter-spacing.1}",
        "type": "letterSpacing",
        "description": "H4 letter spacing"
      },
      "paragraph-spacing": {
        "value": "{spacing.3}",
        "type": "spacing",
        "description": "Spacing between <h4> and other elements with .usa-prose class"
      }
    },
    "h5-font": {
      "size": {
        "value": "{font-size.xs}",
        "type": "fontSizes",
        "description": "H5 font size"
      },
      "family": {
        "value": "{font.heading}",
        "type": "fontFamilies",
        "description": "H5 font family"
      },
      "weight": {
        "value": "{font-weight.bold}",
        "type": "fontWeights",
        "description": "H5 font weight"
      },
      "line-height": {
        "value": "{line-height.3}",
        "type": "lineHeights",
        "description": "H5 line height"
      },
      "letter-spacing": {
        "value": "{letter-spacing.1}",
        "type": "letterSpacing",
        "description": "H5 letter spacing"
      },
      "paragraph-spacing": {
        "value": "{spacing.3}",
        "type": "spacing",
        "description": "Spacing between <h5> and other elements with .usa-prose class"
      }
    },
    "h6-font": {
      "size": {
        "value": "{font-size.2xs}",
        "type": "fontSizes",
        "description": "H6 font size"
      },
      "family": {
        "value": "{font.sans}",
        "type": "fontFamilies",
        "description": "H6 font family"
      },
      "weight": {
        "value": "{font-weight.normal}",
        "type": "fontWeights",
        "description": "H6 font weight"
      },
      "line-height": {
        "value": "{line-height.3}",
        "type": "lineHeights",
        "description": "H6 line height"
      },
      "letter-spacing": {
        "value": "{letter-spacing.2}",
        "type": "letterSpacing",
        "description": "H6 letter spacing"
      },
      "text-transform": {
        "value": "uppercase",
        "type": "textTransform",
        "description": "H6 text transform"
      },
      "paragraph-spacing": {
        "value": "{spacing.3}",
        "type": "spacing",
        "description": "Spacing between <h6> and other elements with .usa-prose class"
      }
    },
    "letter-spacing": {
      "0": {
        "value": "0em",
        "type": "letterSpacing",
        "description": "0 letter spacing"
      },
      "1": {
        "value": "0.025em",
        "type": "letterSpacing",
        "description": "Slightly larger letter spacing",
        "a11y": "--a11y-letter-spacing-modifier"
      },
      "2": {
        "value": "0.1em",
        "type": "letterSpacing",
        "description": "Large letter spacing",
        "a11y": "--a11y-letter-spacing-modifier"
      },
      "3": {
        "value": "0.15em",
        "type": "letterSpacing",
        "description": "Largest letter spacing",
        "a11y": "--a11y-letter-spacing-modifier"
      },
      "neg-3": {
        "value": "-0.03em",
        "type": "letterSpacing",
        "description": "Smallest letter spacing",
        "a11y": "--a11y-letter-spacing-modifier"
      },
      "neg-2": {
        "value": "-0.02em",
        "type": "letterSpacing",
        "description": "Small letter spacing",
        "a11y": "--a11y-letter-spacing-modifier"
      },
      "neg-1": {
        "value": "-0.01em",
        "type": "letterSpacing",
        "description": "Slightly smaller letter spacing",
        "a11y": "--a11y-letter-spacing-modifier"
      },
      "auto": {
        "value": "initial",
        "type": "letterSpacing",
        "description": "Auto letter spacing"
      }
    },
    "lead-font": {
      "size": {
        "value": "{font-size.lg}",
        "type": "fontSizes",
        "description": "Lead font size"
      },
      "family": {
        "value": "{body-font.family}",
        "type": "fontFamilies",
        "description": "Lead font family"
      },
      "weight": {
        "value": "{font-weight.medium}",
        "type": "fontWeights",
        "description": "Lead font weight"
      },
      "line-height": {
        "value": "{line-height.3}",
        "type": "lineHeights",
        "description": "Lead line height"
      },
      "letter-spacing": {
        "value": "{letter-spacing.0}",
        "type": "letterSpacing",
        "description": "Lead letter spacing"
      },
      "max-width": {
        "value": "{measure.base}",
        "type": "maxWidth",
        "description": "Lead max width"
      },
      "paragraph-spacing": {
        "value": "{spacing.3}",
        "type": "spacing",
        "description": "Spacing between .usa-intro and other elements within .usa-prose class"
      }
    },
    "body": {
      "background": {
        "value": "{color-gray.2}",
        "type": "color",
        "description": "Body background color"
      },
      "ink": {
        "value": "{base.darkest}",
        "type": "color",
        "description": "Body text color"
      }
    },
    "table": {
      "border-width": {
        "value": "{border-width.md}",
        "type": "sizing",
        "description": "Table border width"
      },
      "cell-compact-padding-x": {
        "value": "{spacing.1}",
        "type": "sizing",
        "description": "Table cell compact padding x"
      },
      "cell-compact-padding-y": {
        "value": "{spacing.05}",
        "type": "sizing",
        "description": "Table cell compact padding y"
      },
      "cell-padding-x": {
        "value": "{spacing.2}",
        "type": "sizing",
        "description": "Table cell padding x"
      },
      "cell-padding-y": {
        "value": "{spacing.1}",
        "type": "sizing",
        "description": "Table cell padding y"
      },
      "unsorted-icon-hover-color": {
        "value": "{base.dark}",
        "type": "color",
        "description": "Table unsorted icon hover color"
      },
      "unsorted-icon-color": {
        "value": "{base}",
        "type": "color",
        "description": "Table unsorted icon color"
      },
      "sorted-stripe-background-color": {
        "value": "{accent-cool.light}",
        "type": "color",
        "description": "Table sorted stripe background color"
      },
      "sorted-background-color": {
        "value": "{accent-cool.lighter}",
        "type": "color",
        "description": "Table sorted background color"
      },
      "sorted-header-background-color": {
        "value": "{accent-cool.light}",
        "type": "color",
        "description": "Table sorted header background color"
      },
      "text-hover-color": {
        "value": "{base.dark}",
        "type": "color",
        "description": "Table text hover color"
      },
      "background-color": {
        "value": "{body.background}",
        "type": "color",
        "description": "Table background color"
      },
      "stripe-background-color": {
        "value": "{base.lighter}",
        "type": "color",
        "description": "Table stripe background color"
      },
      "header-background-color": {
        "value": "{base.lighter}",
        "type": "color",
        "description": "Table header background color"
      },
      "border-color": {
        "value": "{body.ink}",
        "type": "color",
        "description": "Table border color"
      },
      "sorted-icon-color": {
        "value": "{table.text-color}",
        "type": "color",
        "description": "Table sorted icon color"
      },
      "sorted-header-text-color": {
        "value": "{table.text-color}",
        "type": "color",
        "description": "Table sorted header text color"
      },
      "text-color": {
        "value": "{body.ink}",
        "type": "color",
        "description": "Table text color"
      },
      "stripe-text-color": {
        "value": "{table.text-color}",
        "type": "color",
        "description": "Table stripe text color"
      },
      "header-text-color": {
        "value": "{table.text-color}",
        "type": "color",
        "description": "Table header text color"
      },
      "sorted-text-color": {
        "value": "{table.text-color}",
        "type": "color",
        "description": "Table sorted text color"
      },
      "font-size": {
        "value": "{font-size.md}",
        "type": "fontSizes",
        "description": "Table font size"
      },
      "font-family": {
        "value": "{font.body}",
        "type": "fontFamilies",
        "description": "Table font family"
      },
      "line-height": {
        "value": "{line-height.3}",
        "type": "lineHeights",
        "description": "Table line height"
      },
      "font-weight": {
        "value": "{font-weight.normal}",
        "type": "fontWeights",
        "description": "Table font weight"
      },
      "header-font-size": {
        "value": "{font-size.md}",
        "type": "fontSizes",
        "description": "Table header font size"
      },
      "header-font-family": {
        "value": "{font.body}",
        "type": "fontFamilies",
        "description": "Table header font family"
      },
      "header-font-weight": {
        "value": "{font-weight.medium}",
        "type": "fontWeights",
        "description": "Table header font weight"
      },
      "header-line-height": {
        "value": "{line-height.3}",
        "type": "lineHeights",
        "description": "Table header line height"
      },
      "margin-y": {
        "value": "{spacing.205}",
        "type": "sizing",
        "description": "Table margin y"
      },
      "caption-margin-bottom": {
        "value": "{spacing.105}",
        "type": "sizing",
        "description": "Table caption margin bottom"
      },
      "caption-font-size": {
        "value": "{font-size.sm}",
        "type": "fontSizes",
        "description": "Table caption font size"
      },
      "caption-font-family": {
        "value": "{font.body}",
        "type": "fontFamilies",
        "description": "Table caption font family"
      },
      "caption-font-weight": {
        "value": "{font-weight.semibold}",
        "type": "fontWeights",
        "description": "Table caption font weight"
      },
      "caption-text-align": {
        "value": "left",
        "type": "textAlignment",
        "description": "Table caption text align"
      },
      "caption-line-height": {
        "value": "{line-height.5}",
        "type": "lineHeights",
        "description": "Table caption line height"
      }
    },
    "sidenav": {
      "item-font-size": {
        "value": "{font-size.sm}",
        "type": "fontSizes",
        "description": "Side navigation item font size"
      },
      "item-font-family": {
        "value": "{font.sans}",
        "type": "fontFamilies",
        "description": "Side navigation item font family"
      },
      "item-font-weight": {
        "value": "{font-weight.normal}",
        "type": "fontWeights",
        "description": "Side navigation item font weight"
      },
      "item-font-weight-current": {
        "value": "{font-weight.semibold}",
        "type": "fontWeights",
        "description": "Side navigation item font weight current"
      },
      "item-line-height": {
        "value": "{line-height.4}",
        "type": "lineHeights",
        "description": "Side navigation item line height"
      },
      "item-text-align": {
        "value": "left",
        "type": "textAlign",
        "description": "Side navigation item text align"
      },
      "sublist-font-size": {
        "value": "{sidenav.item-font-size}",
        "type": "fontSizes",
        "description": "Side navigation sublist font size"
      },
      "sublist-font-weight": {
        "value": "{sidenav.item-font-weight}",
        "type": "fontWeights",
        "description": "Side navigation sublist font weight"
      },
      "sublist-font-weight-current": {
        "value": "{sidenav.item-font-weight-current}",
        "type": "fontWeights",
        "description": "Side navigation sublist font weight current"
      },
      "sublist-line-height": {
        "value": "{sidenav.item-line-height}",
        "type": "lineHeights",
        "description": "Side navigation sublist line height"
      },
      "sublist-font-family": {
        "value": "{sidenav.item-font-family}",
        "type": "fontFamilies",
        "description": "Side navigation sublist font family"
      },
      "item-background": {
        "value": "{white}",
        "type": "colors",
        "description": "Side navigation item background"
      },
      "item-background-hover": {
        "value": "{primary.lightest}",
        "type": "colors",
        "description": "Side navigation item background hover"
      },
      "item-background-current": {
        "value": "{sidenav.item-background}",
        "type": "colors",
        "description": "Side navigation item background current"
      },
      "sublist-background": {
        "value": "{sidenav.item-background}",
        "type": "colors",
        "description": "Side navigation sublist background"
      },
      "sublist-background-hover": {
        "value": "{sidenav.item-background-hover}",
        "type": "colors",
        "description": "Side navigation sublist background hover"
      },
      "sublist-background-current": {
        "value": "{sidenav.item-background-current}",
        "type": "colors",
        "description": "Side navigation sublist background current"
      },
      "border-color": {
        "value": "{base.lighter}",
        "type": "colors",
        "description": "Side navigation item border color"
      },
      "border-width": {
        "value": "{border-width.md}",
        "type": "borderWidths",
        "description": "Side navigation item border width"
      },
      "border-radius": {
        "value": "{border-radius.lg}",
        "type": "borderRadius",
        "description": "Side navigation item border radius"
      },
      "item-border-color": {
        "value": "{base.lighter}",
        "type": "colors",
        "description": "Side navigation item border color"
      },
      "item-border-width": {
        "value": "{border-width.1px}",
        "type": "borderWidths",
        "description": "Side navigation item border width"
      },
      "sublist-border-color": {
        "value": "{sidenav.item-border-color}",
        "type": "colors",
        "description": "Side navigation sublist border color"
      },
      "sublist-border-width": {
        "value": "{sidenav.item-border-width}",
        "type": "borderWidths",
        "description": "Side navigation sublist border width"
      },
      "item-padding-x": {
        "value": "{spacing.2}",
        "type": "spacing",
        "description": "Side navigation item padding x"
      },
      "item-padding-y": {
        "value": "{spacing.1}",
        "type": "spacing",
        "description": "Side navigation item padding y"
      },
      "item-margin-bottom": {
        "value": "{spacing.0}",
        "type": "spacing",
        "description": "Side navigation item margin bottom"
      },
      "item-margin-top": {
        "value": "{spacing.0}",
        "type": "spacing",
        "description": "Side navigation item margin top"
      },
      "item-color": {
        "value": "{ink}",
        "type": "colors",
        "description": "Side navigation item color"
      },
      "item-color-hover": {
        "value": "{primary.dark}",
        "type": "colors",
        "description": "Side navigation item color hover"
      },
      "item-color-current": {
        "value": "{primary}",
        "type": "colors",
        "description": "Side navigation item color current"
      },
      "item-text-decoration": {
        "value": "none",
        "type": "textDecoration",
        "description": "Side navigation item text decoration"
      },
      "sublist-item-color": {
        "value": "{sidenav.item-color}",
        "type": "colors",
        "description": "Side navigation sublist item color"
      },
      "sublist-item-color-hover": {
        "value": "{sidenav.item-color-hover}",
        "type": "colors",
        "description": "Side navigation sublist item color hover"
      },
      "sublist-item-color-current": {
        "value": "{sidenav.item-color-current}",
        "type": "colors",
        "description": "Side navigation sublist item color current"
      },
      "sublist-item-text-decoration": {
        "value": "{sidenav.item-text-decoration}",
        "type": "textDecoration",
        "description": "Side navigation sublist item text decoration"
      },
      "item-focus-outline-offset": {
        "value": "0",
        "type": "spacing",
        "description": "Side navigation item focus outline offset"
      },
      "item-current-indicator-color": {
        "value": "{primary}",
        "type": "colors",
        "description": "Side navigation item current indicator color"
      },
      "item-current-indicator-border-radius": {
        "value": "{border-radius.pill}",
        "type": "borderRadius",
        "description": "Side navigation item current indicator border radius"
      },
      "item-current-indicator-width": {
        "value": "{spacing.05}",
        "type": "sizing",
        "description": "Side navigation item current indicator width"
      },
      "item-current-indicator-position": {
        "value": "2%",
        "type": "spacing",
        "description": "Side navigation item current indicator position. 0 is left, 100% is right."
      },
      "child-padding-left": {
        "value": "{spacing.2}",
        "type": "spacing",
        "description": "Side navigation child padding left"
      },
      "child-padding-right": {
        "value": "{spacing.0}",
        "type": "spacing",
        "description": "Side navigation child padding left"
      },
      "child-padding-multiplier": {
        "value": "2",
        "type": "spacing",
        "description": "Side navigation child padding left multiplier"
      }
    },
    "input": {
      "font-family": {
        "value": "{font.ui}",
        "type": "fontFamilies",
        "description": "Font family"
      },
      "font-size": {
        "value": "{body-font.size}",
        "type": "fontSizes",
        "description": "Font size"
      },
      "font-weight": {
        "value": "{font-weight.normal}",
        "type": "fontWeights",
        "description": "Font weight"
      },
      "line-height": {
        "value": "{line-height.4}",
        "type": "lineHeights",
        "description": "Line height"
      },
      "letter-spacing": {
        "value": "{body-font.letter-spacing}",
        "type": "letterSpacing",
        "description": "Letter spacing"
      },
      "height": {
        "value": "{spacing.5}",
        "type": "sizes",
        "description": "Height"
      },
      "select-size": {
        "value": "{spacing.205}",
        "type": "sizes",
        "description": "Select size"
      },
      "max-width": {
        "value": "{spacing.mobile-lg}",
        "type": "sizes",
        "description": "Max width"
      },
      "margin-top": {
        "value": "{spacing.1}",
        "type": "spacing",
        "description": "Margin top"
      },
      "padding-x": {
        "value": "{spacing.1}",
        "type": "spacing",
        "description": "Padding x"
      },
      "padding-y": {
        "value": "{spacing.05}",
        "type": "spacing",
        "description": "Padding y"
      },
      "large-height": {
        "value": "{spacing.6}",
        "type": "spacing",
        "description": "Large height"
      },
      "border-width": {
        "value": "{border-width.sm}",
        "type": "borderWidths",
        "description": "Border width"
      },
      "border-color": {
        "value": "{ink}",
        "type": "colors",
        "description": "Border color"
      },
      "border-color-hover": {
        "value": "{ink}",
        "type": "colors",
        "description": "Border color hover"
      },
      "color": {
        "value": "{ink}",
        "type": "colors",
        "description": "Color"
      },
      "placeholder-color": {
        "value": "{base}",
        "type": "colors",
        "description": "Placeholder color"
      },
      "background-color": {
        "value": "{white}",
        "type": "colors",
        "description": "Background color"
      },
      "border-radius": {
        "value": "{border-radius.0}",
        "type": "borderRadius",
        "description": "Border radius"
      },
      "search-min-width": {
        "value": "27ch",
        "type": "sizes",
        "description": "Search min width"
      },
      "disabled-border-color": {
        "value": "{disabled.light}",
        "type": "colors",
        "description": "Disabled border color"
      },
      "disabled-border-color-hover": {
        "value": "{input.disabled-border-color}",
        "type": "colors",
        "description": "Disabled border color hover"
      },
      "disabled-color": {
        "value": "{disabled}",
        "type": "colors",
        "description": "Disabled color"
      },
      "disabled-background-color": {
        "value": "{disabled.lighter}",
        "type": "colors",
        "description": "Disabled background color"
      },
      "label-font-size": {
        "value": "{body-font.size}",
        "type": "fontSizes",
        "description": "Label font size"
      },
      "label-font-family": {
        "value": "{body-font.family}",
        "type": "fontFamilies",
        "description": "Label font family"
      },
      "label-font-weight": {
        "value": "{body-font.weight}",
        "type": "fontWeights",
        "description": "Label font weight"
      },
      "label-color": {
        "value": "{ink}",
        "type": "colors",
        "description": "Label color"
      },
      "label-line-height": {
        "value": "{body-font.line-height}",
        "type": "lineHeights",
        "description": "Label line height"
      },
      "label-letter-spacing": {
        "value": "{body-font.letter-spacing}",
        "type": "letterSpacing",
        "description": "Label letter spacing"
      },
      "label-margin-bottom": {
        "value": "{spacing.05}",
        "type": "spacing",
        "description": "Label margin bottom"
      },
      "label-margin-top": {
        "value": "{spacing.2}",
        "type": "spacing",
        "description": "Label margin top"
      },
      "select-caret-color": {
        "value": "{input.color}",
        "type": "colors",
        "description": "Select caret color"
      }
    },
    "base": {
      "lightest": {
        "value": "{color.gray.5}",
        "type": "color",
        "description": "Base lightest color"
      },
      "lighter": {
        "value": "{color.gray.cool.10}",
        "type": "color",
        "description": "Base lighter color"
      },
      "light": {
        "value": "{color.gray.cool.30}",
        "type": "color",
        "description": "Base light color"
      },
      "base": {
        "value": "{color.gray.cool.50}",
        "type": "color",
        "description": "Base color"
      },
      "dark": {
        "value": "{color.gray.cool.60}",
        "type": "color",
        "description": "Base dark color"
      },
      "darker": {
        "value": "{color.gray.cool.70}",
        "type": "color",
        "description": "Base darker color"
      },
      "darkest": {
        "value": "{color.gray.90}",
        "type": "color",
        "description": "Base darkest color"
      }
    },
    "info": {
      "lighter": {
        "value": "{color.cyan.5}",
        "type": "color",
        "description": "Info lighter color"
      },
      "light": {
        "value": "{color.cyan.20}",
        "type": "color",
        "description": "Info light color"
      },
      "base": {
        "value": "{color.cyan.vivid.30}",
        "type": "color",
        "description": "Info color"
      },
      "dark": {
        "value": "{color.cyan.vivid.40}",
        "type": "color",
        "description": "Info dark color"
      },
      "darker": {
        "value": "{color.blue-cool.60}",
        "type": "color",
        "description": "Info darker color"
      }
    },
    "success": {
      "lighter": {
        "value": "{color.green.5}",
        "type": "color",
        "description": "Success lighter color"
      },
      "light": {
        "value": "{color.green.10}",
        "type": "color",
        "description": "Success light color"
      },
      "base": {
        "value": "{color.green.vivid.40}",
        "type": "color",
        "description": "Success color"
      },
      "dark": {
        "value": "{color.green.vivid.50}",
        "type": "color",
        "description": "Success dark color"
      },
      "darker": {
        "value": "{color.green.vivid.70}",
        "type": "color",
        "description": "Success darker color"
      }
    },
    "warning": {
      "lighter": {
        "value": "{color.yellow.5}",
        "type": "color",
        "description": "Warning lighter color"
      },
      "light": {
        "value": "{color.yellow.vivid.10}",
        "type": "color",
        "description": "Warning light color"
      },
      "base": {
        "value": "{color.gold.vivid.20}",
        "type": "color",
        "description": "Warning color"
      },
      "dark": {
        "value": "{color.gold.vivid.30}",
        "type": "color",
        "description": "Warning dark color"
      },
      "darker": {
        "value": "{color.gold.vivid.50}",
        "type": "color",
        "description": "Warning darker color"
      }
    },
    "error": {
      "lighter": {
        "value": "{color.red-warm.10}",
        "type": "color",
        "description": "Error lighter color"
      },
      "light": {
        "value": "{color.red-warm.vivid.30}",
        "type": "color",
        "description": "Error light color"
      },
      "base": {
        "value": "{color.red-warm.vivid.50}",
        "type": "color",
        "description": "Error color"
      },
      "dark": {
        "value": "{color.red.vivid.60}",
        "type": "color",
        "description": "Error dark color"
      },
      "darker": {
        "value": "{color.red.70}",
        "type": "color",
        "description": "Error darker color"
      }
    },
    "disabled": {
      "lighter": {
        "value": "{color.gray.10}",
        "type": "color",
        "description": "Disabled lighter color"
      },
      "light": {
        "value": "{color.gray.20}",
        "type": "color",
        "description": "Disabled light color"
      },
      "base": {
        "value": "{color.gray.40}",
        "type": "color",
        "description": "Disabled color"
      },
      "dark": {
        "value": "{color.gray.50}",
        "type": "color",
        "description": "Disabled dark color"
      },
      "darker": {
        "value": "{color.gray.60}",
        "type": "color",
        "description": "Disabled darker color"
      }
    },
    "border": {
      "radius-0": {
        "value": "{spacing.0}",
        "type": "borderRadius",
        "description": "No border radius"
      },
      "radius-sm": {
        "value": "{spacing.2px}",
        "type": "borderRadius",
        "description": "Small border radius"
      },
      "radius-md": {
        "value": "{spacing.05}",
        "type": "borderRadius",
        "description": "Medium border radius"
      },
      "radius-lg": {
        "value": "{spacing.1}",
        "type": "borderRadius",
        "description": "Large border radius"
      },
      "radius-pill": {
        "value": "{spacing.tablet}",
        "type": "borderRadius",
        "description": "Pill border radius"
      },
      "color-lighter": {
        "value": "{base.lighter}",
        "type": "color",
        "description": "Border lighter color"
      },
      "color-light": {
        "value": "{base.light}",
        "type": "color",
        "description": "Border light color"
      },
      "color-base": {
        "value": "{base}",
        "type": "color",
        "description": "Border color"
      },
      "color-dark": {
        "value": "{base.dark}",
        "type": "color",
        "description": "Border dark color"
      },
      "color-darker": {
        "value": "{base.darker}",
        "type": "color",
        "description": "Border darker color"
      },
      "width-0": {
        "value": "{spacing.0}",
        "type": "borderWidth",
        "description": "No border width"
      },
      "width-sm": {
        "value": "{spacing.1px}",
        "type": "borderWidth",
        "description": "Small border width"
      },
      "width-md": {
        "value": "{spacing.2px}",
        "type": "borderWidth",
        "description": "Medium border width"
      },
      "width-lg": {
        "value": "{spacing.05}",
        "type": "borderWidth",
        "description": "Large border width"
      }
    },
    "radio": {
      "size": {
        "value": "{spacing.205}",
        "type": "size",
        "description": "Radio button size"
      },
      "gap": {
        "value": "{spacing.2}",
        "type": "size",
        "description": "Radio button gap"
      },
      "background-color": {
        "value": "{body.background}",
        "type": "color",
        "description": "Radio button background color"
      },
      "label-color": {
        "value": "{ink}",
        "type": "color",
        "description": "Radio button label color"
      },
      "label-font-family": {
        "value": "{input.font-family}",
        "type": "fontFamilies",
        "description": "Radio button label font family"
      },
      "label-font-size": {
        "value": "{input.font-size}",
        "type": "fontSizes",
        "description": "Radio button label font size"
      },
      "label-font-weight": {
        "value": "{input.font-weight}",
        "type": "fontWeights",
        "description": "Radio button label font weight"
      },
      "label-line-height": {
        "value": "{input.line-height}",
        "type": "lineHeights",
        "description": "Radio button label line height"
      },
      "label-letter-spacing": {
        "value": "{input.letter-spacing}",
        "type": "letterSpacing",
        "description": "Radio button label letter spacing"
      },
      "border-color": {
        "value": "{base.base}",
        "type": "color",
        "description": "Radio button border color"
      },
      "border-width": {
        "value": "{border.width-md}",
        "type": "size",
        "description": "Radio button border width"
      },
      "border-radius": {
        "value": "{border-radius.pill}",
        "type": "size",
        "description": "Radio button border radius"
      },
      "checked-background-color": {
        "value": "{primary}",
        "type": "color",
        "description": "Radio button checked background color"
      },
      "checked-border-color": {
        "value": "{primary}",
        "type": "color",
        "description": "Radio button checked border color"
      },
      "focus-border-color": {
        "value": "{input.focus-border-color}",
        "type": "color",
        "description": "Radio button focus border color"
      },
      "focus-border-width": {
        "value": "{input.focus-border-width}",
        "type": "size",
        "description": "Radio button focus border width"
      },
      "disabled-background-color": {
        "value": "{body.background}",
        "type": "color",
        "description": "Radio button disabled background color"
      },
      "disabled-border-color": {
        "value": "{disabled.base}",
        "type": "color",
        "description": "Radio button disabled border color"
      },
      "disabled-color": {
        "value": "{disabled.base}",
        "type": "color",
        "description": "Radio button disabled color"
      },
      "tile-padding-y": {
        "value": "{spacing.2}",
        "type": "size",
        "description": "Radio button tile padding y"
      },
      "tile-padding-x": {
        "value": "{spacing.2}",
        "type": "size",
        "description": "Radio button tile padding y"
      },
      "tile-background-color": {
        "value": "{input.background-color}",
        "type": "color",
        "description": "Radio button tile background color"
      },
      "tile-label-color": {
        "value": "{ink}",
        "type": "color",
        "description": "Radio button tile label color"
      },
      "tile-border-radius": {
        "value": "{border.radius-md}",
        "type": "size",
        "description": "Radio button tile border radius"
      },
      "tile-border-color": {
        "value": "{base.base}",
        "type": "color",
        "description": "Radio button tile border color"
      },
      "tile-border-width": {
        "value": "{radio.border-width}",
        "type": "size",
        "description": "Radio button tile border width"
      },
      "tile-checked-background-color": {
        "value": "{primary.lightest}",
        "type": "color",
        "description": "Radio button tile checked background color"
      },
      "tile-checked-border-color": {
        "value": "{radio.checked-border-color}",
        "type": "color",
        "description": "Radio button tile checked border color"
      }
    },
    "secondary": {
      "lightest": {
        "value": "{color.red.5}",
        "type": "color",
        "description": "Secondary lightest color"
      },
      "lighter": {
        "value": "{color.red-cool.vivid.10}",
        "type": "color",
        "description": "Secondary lighter color"
      },
      "light": {
        "value": "{color.red.30}",
        "type": "color",
        "description": "Secondary light color"
      },
      "base": {
        "value": "{color.red.50}",
        "type": "color",
        "description": "Secondary color"
      },
      "vivid": {
        "value": "{color.red-cool.vivid.50}",
        "type": "color",
        "description": "Vivid secondary color"
      },
      "dark": {
        "value": "{color.red.vivid.60}",
        "type": "color",
        "description": "Secondary dark color"
      },
      "darker": {
        "value": "{color.red.vivid.70}",
        "type": "color",
        "description": "Secondary darker color"
      },
      "darkest": {
        "value": "{color.red.80}",
        "type": "color",
        "description": "Secondary darkest color"
      }
    },
    "color": {
      "black": {
        "value": "#0a0a0a",
        "type": "color",
        "description": "Black"
      },
      "white": {
        "value": "#f7f7f7",
        "type": "color",
        "description": "White"
      },
      "red": {
        "value": "#e52207",
        "type": "color",
        "description": "Red"
      },
      "red-warm": {
        "value": "{color.red-warm.40}",
        "type": "color",
        "description": "Red warm"
      },
      "orange": {
        "value": "#e66f0e",
        "type": "color",
        "description": "Orange"
      },
      "orange-warm": {
        "value": "{color.orange-warm.40}",
        "type": "color",
        "description": "Orange warm"
      },
      "gold": {
        "value": "#ffbe2e",
        "type": "color",
        "description": "Gold"
      },
      "yellow": {
        "value": "#fee685",
        "type": "color",
        "description": "Yellow"
      },
      "green-warm": {
        "value": "{color.green-warm.40}",
        "type": "color",
        "description": "Green warm"
      },
      "green": {
        "value": "#538200",
        "type": "color",
        "description": "Green"
      },
      "green-cool": {
        "value": "{color.green-cool.40}",
        "type": "color",
        "description": "Green cool"
      },
      "mint": {
        "value": "#04c585",
        "type": "color",
        "description": "Mint"
      },
      "mint-cool": {
        "value": "{color.mint-cool.40}",
        "type": "color",
        "description": "Mint cool"
      },
      "cyan": {
        "value": "#009ec1",
        "type": "color",
        "description": "Cyan"
      },
      "blue": {
        "value": "#0076d6",
        "type": "color",
        "description": "Blue"
      },
      "blue-warm": {
        "value": "{color.blue-warm.40}",
        "type": "color",
        "description": "Blue warm"
      },
      "indigo-cool": {
        "value": "{color.indigo-cool.40}",
        "type": "color",
        "description": "Indigo cool"
      },
      "indigo": {
        "value": "#676cc8",
        "type": "color",
        "description": "Indigo"
      },
      "indigo-warm": {
        "value": "{color.indigo-warm.40}",
        "type": "color",
        "description": "Indigo warm"
      },
      "violet": {
        "value": "#8168b3",
        "type": "color",
        "description": "Violet"
      },
      "violet-warm": {
        "value": "{color.violet-warm.40}",
        "type": "color",
        "description": "Violet warm"
      },
      "magenta": {
        "value": "#d72d79",
        "type": "color",
        "description": "Magenta"
      },
      "gray-cool": {
        "value": "{color.gray-cool.40}",
        "type": "color",
        "description": "Gray cool"
      },
      "gray": {
        "value": "gray",
        "type": "color",
        "description": "Gray"
      }
    },
    "spacing": {
      "0": {
        "value": "0",
        "type": "spacing",
        "description": "No spacing"
      },
      "1": {
        "value": "8px",
        "type": "spacing",
        "description": "Small spacing",
        "a11y": "--a11y-spacing-modifier"
      },
      "2": {
        "value": "16px",
        "type": "spacing",
        "description": "Medium spacing",
        "a11y": "--a11y-spacing-modifier"
      },
      "3": {
        "value": "24px",
        "type": "spacing",
        "description": "Large spacing",
        "a11y": "--a11y-spacing-modifier"
      },
      "4": {
        "value": "32px",
        "type": "spacing",
        "description": "Large spacing",
        "a11y": "--a11y-spacing-modifier"
      },
      "5": {
        "value": "40px",
        "type": "spacing",
        "description": "Large spacing",
        "a11y": "--a11y-spacing-modifier"
      },
      "6": {
        "value": "48px",
        "type": "spacing",
        "description": "Large spacing",
        "a11y": "--a11y-spacing-modifier"
      },
      "7": {
        "value": "56px",
        "type": "spacing",
        "description": "Large spacing",
        "a11y": "--a11y-spacing-modifier"
      },
      "8": {
        "value": "64px",
        "type": "spacing",
        "description": "Large spacing",
        "a11y": "--a11y-spacing-modifier"
      },
      "9": {
        "value": "72px",
        "type": "spacing",
        "description": "Large spacing",
        "a11y": "--a11y-spacing-modifier"
      },
      "10": {
        "value": "80px",
        "type": "spacing",
        "description": "Large spacing",
        "a11y": "--a11y-spacing-modifier"
      },
      "15": {
        "value": "120px",
        "type": "spacing",
        "description": "Largest spacing",
        "a11y": "--a11y-spacing-modifier"
      },
      "105": {
        "value": "12px",
        "type": "spacing",
        "description": "Medium spacing",
        "a11y": "--a11y-spacing-modifier"
      },
      "205": {
        "value": "20px",
        "type": "spacing",
        "description": "Medium spacing",
        "a11y": "--a11y-spacing-modifier"
      },
      "neg-15": {
        "value": "-120px",
        "type": "spacing",
        "description": "Largest negative spacing",
        "a11y": "--a11y-spacing-modifier"
      },
      "neg-10": {
        "value": "-80px",
        "type": "spacing",
        "description": "Large negative spacing",
        "a11y": "--a11y-spacing-modifier"
      },
      "neg-9": {
        "value": "-72px",
        "type": "spacing",
        "description": "Large negative spacing",
        "a11y": "--a11y-spacing-modifier"
      },
      "neg-8": {
        "value": "-64px",
        "type": "spacing",
        "description": "Large negative spacing",
        "a11y": "--a11y-spacing-modifier"
      },
      "neg-7": {
        "value": "-56px",
        "type": "spacing",
        "description": "Large negative spacing",
        "a11y": "--a11y-spacing-modifier"
      },
      "neg-6": {
        "value": "-48px",
        "type": "spacing",
        "description": "Large negative spacing",
        "a11y": "--a11y-spacing-modifier"
      },
      "neg-5": {
        "value": "-40px",
        "type": "spacing",
        "description": "Large negative spacing",
        "a11y": "--a11y-spacing-modifier"
      },
      "neg-4": {
        "value": "-32px",
        "type": "spacing",
        "description": "Large negative spacing",
        "a11y": "--a11y-spacing-modifier"
      },
      "neg-3": {
        "value": "-24px",
        "type": "spacing",
        "description": "Large negative spacing",
        "a11y": "--a11y-spacing-modifier"
      },
      "neg-205": {
        "value": "-20px",
        "type": "spacing",
        "description": "Medium negative spacing",
        "a11y": "--a11y-spacing-modifier"
      },
      "neg-2": {
        "value": "-16px",
        "type": "spacing",
        "description": "Medium negative spacing",
        "a11y": "--a11y-spacing-modifier"
      },
      "neg-105": {
        "value": "-12px",
        "type": "spacing",
        "description": "Medium negative spacing",
        "a11y": "--a11y-spacing-modifier"
      },
      "neg-1": {
        "value": "-8px",
        "type": "spacing",
        "description": "Small negative spacing",
        "a11y": "--a11y-spacing-modifier"
      },
      "neg-05": {
        "value": "-4px",
        "type": "spacing",
        "description": "Small negative spacing",
        "a11y": "--a11y-spacing-modifier"
      },
      "neg-2px": {
        "value": "-2px",
        "type": "spacing",
        "description": "Small negative spacing",
        "a11y": "--a11y-spacing-modifier"
      },
      "neg-1px": {
        "value": "-1px",
        "type": "spacing",
        "description": "Smallest negative spacing",
        "a11y": "--a11y-spacing-modifier"
      },
      "1px": {
        "value": "1px",
        "type": "spacing",
        "description": "Smallest spacing",
        "a11y": "--a11y-spacing-modifier"
      },
      "2px": {
        "value": "2px",
        "type": "spacing",
        "description": "Small spacing",
        "a11y": "--a11y-spacing-modifier"
      },
      "05": {
        "value": "4px",
        "type": "spacing",
        "description": "Small spacing",
        "a11y": "--a11y-spacing-modifier"
      },
      "card": {
        "value": "160px",
        "type": "spacing",
        "description": "Card spacing",
        "a11y": "--a11y-spacing-modifier"
      },
      "card-lg": {
        "value": "240px",
        "type": "spacing",
        "description": "Large card spacing",
        "a11y": "--a11y-spacing-modifier"
      },
      "mobile": {
        "value": "320px",
        "type": "spacing",
        "description": "Mobile spacing",
        "a11y": "--a11y-spacing-modifier"
      },
      "mobile-lg": {
        "value": "480px",
        "type": "spacing",
        "description": "Large mobile spacing",
        "a11y": "--a11y-spacing-modifier"
      },
      "tablet": {
        "value": "640px",
        "type": "spacing",
        "description": "Tablet spacing",
        "a11y": "--a11y-spacing-modifier"
      },
      "tablet-lg": {
        "value": "880px",
        "type": "spacing",
        "description": "Large tablet spacing",
        "a11y": "--a11y-spacing-modifier"
      },
      "desktop": {
        "value": "1024px",
        "type": "spacing",
        "description": "Desktop spacing",
        "a11y": "--a11y-spacing-modifier"
      },
      "desktop-lg": {
        "value": "1200px",
        "type": "spacing",
        "description": "Large desktop spacing",
        "a11y": "--a11y-spacing-modifier"
      },
      "widescreen": {
        "value": "1400px",
        "type": "spacing",
        "description": "Widescreen spacing",
        "a11y": "--a11y-spacing-modifier"
      }
    },
    "focus": {
      "offset": {
        "value": "{spacing.05}",
        "type": "spacing",
        "description": "Focus offset"
      },
      "width": {
        "value": "{spacing.05}",
        "type": "spacing",
        "description": "Focus width"
      },
      "style": {
        "value": "solid",
        "type": "borderStyles",
        "description": "Focus style"
      },
      "color": {
        "value": "{color.mint.vivid.30}",
        "type": "colors",
        "description": "Focus color"
      }
    }
  },
  "weiss": {
    "primary": {
      "lightest": {
        "value": "{color.blue.5}",
        "type": "color",
        "description": "Primary lightest color"
      },
      "lighter": {
        "value": "{color.indigo-cool.10}",
        "type": "color",
        "description": "Primary lighter color"
      },
      "light": {
        "value": "{color.indigo-cool.30}",
        "type": "color",
        "description": "Primary light color"
      },
      "base": {
        "value": "{color.indigo-cool.vivid.60}",
        "type": "color",
        "description": "Primary color"
      },
      "vivid": {
        "value": "{color.indigo-cool.vivid.60}",
        "type": "color",
        "description": "Vivid primary color"
      },
      "dark": {
        "value": "{color.indigo-cool.vivid.70}",
        "type": "color",
        "description": "Primary dark color"
      },
      "darker": {
        "value": "{color.indigo-warm.vivid.80}",
        "type": "color",
        "description": "Primary darker color"
      },
      "darkest": {
        "value": "{body.ink}",
        "type": "color",
        "description": "Primary darkest color"
      }
    },
    "accent-cool": {
      "lightest": {
        "value": "{color.mint-cool.5}",
        "type": "color",
        "description": "Accent cool lightest color"
      },
      "lighter": {
        "value": "{color.mint-cool.vivid.5}",
        "type": "color",
        "description": "Accent cool lighter color"
      },
      "light": {
        "value": "{color.mint-cool.vivid.20}",
        "type": "color",
        "description": "Accent cool light color"
      },
      "base": {
        "value": "#0D538C",
        "type": "color",
        "description": "Accent cool color"
      },
      "dark": {
        "value": "{color.mint-cool.vivid.40}",
        "type": "color",
        "description": "Accent cool dark color"
      },
      "darker": {
        "value": "{color.mint-cool.vivid.60}",
        "type": "color",
        "description": "Accent cool darker color"
      },
      "darkest": {
        "value": "{color.mint-cool.vivid.80}",
        "type": "color",
        "description": "Accent cool darkest color"
      }
    },
    "button": {
      "color": {
        "value": "{white}",
        "type": "color",
        "description": "Button color"
      },
      "color-hover": {
        "value": "{white}",
        "type": "color",
        "description": "Button hover color"
      },
      "color-active": {
        "value": "{white}",
        "type": "color",
        "description": "Button active color"
      },
      "background": {
        "value": "{primary}",
        "type": "color",
        "description": "Button background color"
      },
      "background-hover": {
        "value": "{primary.dark}",
        "type": "color",
        "description": "Button hover background color"
      },
      "background-active": {
        "value": "{primary.darker}",
        "type": "color",
        "description": "Button active background color"
      },
      "inverse-color": {
        "value": "{link.reverse-color}",
        "type": "color",
        "description": "Button inverse color"
      },
      "inverse-hover-color": {
        "value": "{link.reverse-hover-color}",
        "type": "color",
        "description": "Button inverse hover color"
      },
      "inverse-active-color": {
        "value": "{link.reverse-active-color}",
        "type": "color",
        "description": "Button inverse active color"
      },
      "font-family": {
        "value": "{font.ui}",
        "type": "fontFamilies",
        "description": "Button font family"
      },
      "font-size": {
        "value": "{font-size.sm}",
        "type": "fontSizes",
        "description": "Button font size"
      },
      "line-height": {
        "value": "{line-height.3}",
        "type": "lineHeights",
        "description": "Button line height"
      },
      "lg-font-size": {
        "value": "{font-size.md}",
        "type": "fontSizes",
        "description": "Button font size"
      },
      "font-weight": {
        "value": "{font-weight.bold}",
        "type": "fontWeights",
        "description": "Button font weight"
      },
      "border-radius": {
        "value": "{border-radius.md}",
        "type": "borderRadius",
        "description": "Button border radius"
      },
      "lg-border-radius": {
        "value": "{border-radius.md}",
        "type": "borderRadius",
        "description": "Button border radius"
      },
      "small-width": {
        "value": "{spacing.6}",
        "type": "sizing",
        "description": "Small button width"
      },
      "stroke-width": {
        "value": "{border-width.2px}",
        "type": "borderWidth",
        "description": "Button stroke width"
      },
      "outline-offset": {
        "value": "{focus.offset}",
        "type": "spacing",
        "description": "Button outline offset"
      },
      "padding-x": {
        "value": "{spacing.205}",
        "type": "spacing",
        "description": "Button padding x"
      },
      "padding-y": {
        "value": "{spacing.105}",
        "type": "spacing",
        "description": "Button padding y"
      },
      "lg-padding-x": {
        "value": "{spacing.205}",
        "type": "spacing",
        "description": "Button padding x"
      },
      "lg-padding-y": {
        "value": "{spacing.105}",
        "type": "spacing",
        "description": "Button padding y"
      },
      "margin-right": {
        "value": "{spacing.0}",
        "type": "spacing",
        "description": "Button margin right"
      },
      "icon-size": {
        "value": "{spacing.3}",
        "type": "sizing",
        "description": "Button icon size"
      },
      "lg-icon-size": {
        "value": "{spacing.4}",
        "type": "sizing",
        "description": "Button icon size"
      },
      "outline-background": {
        "value": "{transparent}",
        "type": "color",
        "description": "Button outline background"
      },
      "outline-background-hover": {
        "value": "{transparent}",
        "type": "color",
        "description": "Button outline hover background"
      },
      "outline-background-active": {
        "value": "{transparent}",
        "type": "color",
        "description": "Button outline active background"
      },
      "outline-color": {
        "value": "{primary}",
        "type": "color",
        "description": "Button outline color"
      },
      "outline-hover-color": {
        "value": "{primary.dark}",
        "type": "color",
        "description": "Button outline hover color"
      },
      "outline-active-color": {
        "value": "{primary.darker}",
        "type": "color",
        "description": "Button outline active color"
      },
      "outline-border-color": {
        "value": "{primary}",
        "type": "color",
        "description": "Button outline border color"
      },
      "outline-border-hover-color": {
        "value": "{primary.dark}",
        "type": "color",
        "description": "Button outline border hover color"
      },
      "outline-border-active-color": {
        "value": "{primary.darker}",
        "type": "color",
        "description": "Button outline border active color"
      }
    },
    "font-size": {
      "3xs": {
        "value": "12px",
        "type": "fontSizes",
        "description": "Smallest font size",
        "a11y": "--a11y-font-size-modifier",
        "responsiveFont": true
      },
      "2xs": {
        "value": "12px",
        "type": "fontSizes",
        "description": "Second smallest font size",
        "a11y": "--a11y-font-size-modifier",
        "responsiveFont": true
      },
      "xs": {
        "value": "14px",
        "type": "fontSizes",
        "description": "Extra small font size",
        "a11y": "--a11y-font-size-modifier",
        "responsiveFont": true
      },
      "sm": {
        "value": "16px",
        "type": "fontSizes",
        "description": "Small font size",
        "a11y": "--a11y-font-size-modifier",
        "responsiveFont": true
      },
      "md": {
        "value": "17.8px",
        "type": "fontSizes",
        "description": "Medium font size",
        "a11y": "--a11y-font-size-modifier",
        "responsiveFont": true
      },
      "lg": {
        "value": "19.5px",
        "type": "fontSizes",
        "description": "Large font size",
        "a11y": "--a11y-font-size-modifier",
        "responsiveFont": true
      },
      "xl": {
        "value": "23.8px",
        "type": "fontSizes",
        "description": "Extra large font size",
        "a11y": "--a11y-font-size-modifier",
        "responsiveFont": true
      },
      "2xl": {
        "value": "31.5px",
        "type": "fontSizes",
        "description": "Second largest font size",
        "a11y": "--a11y-font-size-modifier",
        "responsiveFont": true
      },
      "3xl": {
        "value": "51px",
        "type": "fontSizes",
        "description": "Largest font size",
        "a11y": "--a11y-font-size-modifier",
        "responsiveFont": true
      }
    },
    "line-height": {
      "1": {
        "value": "100%",
        "type": "lineHeight",
        "description": "Smallest line height",
        "a11y": "--a11y-line-height-modifier"
      },
      "2": {
        "value": "110%",
        "type": "lineHeight",
        "description": "Second smallest line height",
        "a11y": "--a11y-line-height-modifier"
      },
      "3": {
        "value": "125%",
        "type": "lineHeight",
        "description": "Regular line height",
        "a11y": "--a11y-line-height-modifier"
      },
      "4": {
        "value": "140%",
        "type": "lineHeight",
        "description": "Large line height",
        "a11y": "--a11y-line-height-modifier"
      },
      "5": {
        "value": "150%",
        "type": "lineHeight",
        "description": "Larger line height",
        "a11y": "--a11y-line-height-modifier"
      },
      "6": {
        "value": "175%",
        "type": "lineHeight",
        "description": "Largest line height",
        "a11y": "--a11y-line-height-modifier"
      }
    },
    "font": {
      "sans": {
        "value": "'Public Sans Web', Helvetica Neue, Helvetica, Roboto, Arial, sans-serif",
        "type": "fontFamilies",
        "description": "System font family"
      },
      "serif": {
        "value": "Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif",
        "type": "fontFamilies",
        "description": "Serif font family"
      },
      "mono": {
        "value": "'Roboto Mono Web', \"Bitstream Vera Sans Mono\", \"Consolas\", \"Courier\", monospace",
        "type": "fontFamilies",
        "description": "Monospace font family"
      },
      "heading": {
        "value": "{font.sans}",
        "type": "fontFamilies",
        "description": "Heading font family"
      },
      "ui": {
        "value": "{font.sans}",
        "type": "fontFamilies",
        "description": "UI font family"
      },
      "code": {
        "value": "{font.mono}",
        "type": "fontFamilies",
        "description": "Code font family"
      },
      "alt": {
        "value": "{font.serif}",
        "type": "fontFamilies",
        "description": "Alternate font family"
      },
      "prose": {
        "value": "{font.sans}",
        "type": "fontFamilies",
        "description": "Prose font family"
      }
    },
    "body-font": {
      "size": {
        "value": "{font-size.sm}",
        "type": "fontSizes",
        "description": "Body font size"
      },
      "family": {
        "value": "{font.sans}",
        "type": "fontFamilies",
        "description": "Body font family"
      },
      "weight": {
        "value": "{font-weight.medium}",
        "type": "fontWeights",
        "description": "Body font weight"
      },
      "line-height": {
        "value": "{line-height.5}",
        "type": "lineHeights",
        "description": "Body line height"
      },
      "letter-spacing": {
        "value": "{letter-spacing.1}",
        "type": "letterSpacing",
        "description": "Body letter spacing"
      },
      "paragraph-spacing": {
        "value": "{spacing.205}",
        "type": "spacing",
        "description": "Spacing between <p> elements with .usa-prose class"
      },
      "list-spacing": {
        "value": "{spacing.105}",
        "type": "spacing",
        "description": "Spacing between <ul> and <ol> child elements with .usa-prose class"
      }
    },
    "h1-font": {
      "size": {
        "value": "{font-size.3xl}",
        "type": "fontSizes",
        "description": "H1 font size"
      },
      "family": {
        "value": "{font.heading}",
        "type": "fontFamilies",
        "description": "H1 font family"
      },
      "weight": {
        "value": "{font-weight.bold}",
        "type": "fontWeights",
        "description": "H1 font weight"
      },
      "line-height": {
        "value": "{line-height.3}",
        "type": "lineHeights",
        "description": "H1 line height"
      },
      "letter-spacing": {
        "value": "{letter-spacing.neg-2}",
        "type": "letterSpacing",
        "description": "H1 letter spacing"
      },
      "paragraph-spacing": {
        "value": "{spacing.205}",
        "type": "spacing",
        "description": "Spacing between <h1> and other elements with .usa-prose class"
      }
    },
    "h2-font": {
      "size": {
        "value": "{font-size.2xl}",
        "type": "fontSizes",
        "description": "H2 font size"
      },
      "family": {
        "value": "{font.heading}",
        "type": "fontFamilies",
        "description": "H2 font family"
      },
      "weight": {
        "value": "{font-weight.bold}",
        "type": "fontWeights",
        "description": "H2 font weight"
      },
      "line-height": {
        "value": "{line-height.3}",
        "type": "lineHeights",
        "description": "H2 line height"
      },
      "letter-spacing": {
        "value": "{letter-spacing.1}",
        "type": "letterSpacing",
        "description": "H2 letter spacing"
      },
      "paragraph-spacing": {
        "value": "{spacing.2}",
        "type": "spacing",
        "description": "Spacing between <h2> and other elements with .usa-prose class"
      }
    },
    "h3-font": {
      "size": {
        "value": "{font-size.xl}",
        "type": "fontSizes",
        "description": "H3 font size"
      },
      "family": {
        "value": "{font.heading}",
        "type": "fontFamilies",
        "description": "H3 font family"
      },
      "weight": {
        "value": "{font-weight.bold}",
        "type": "fontWeights",
        "description": "H3 font weight"
      },
      "line-height": {
        "value": "{line-height.3}",
        "type": "lineHeights",
        "description": "H3 line height"
      },
      "letter-spacing": {
        "value": "{letter-spacing.1}",
        "type": "letterSpacing",
        "description": "H3 letter spacing"
      },
      "paragraph-spacing": {
        "value": "{spacing.1}",
        "type": "spacing",
        "description": "Spacing between <h3> and other elements with .usa-prose class"
      }
    },
    "h4-font": {
      "size": {
        "value": "{font-size.lg}",
        "type": "fontSizes",
        "description": "H4 font size"
      },
      "family": {
        "value": "{font.heading}",
        "type": "fontFamilies",
        "description": "H4 font family"
      },
      "weight": {
        "value": "{font-weight.bold}",
        "type": "fontWeights",
        "description": "H4 font weight"
      },
      "line-height": {
        "value": "{line-height.3}",
        "type": "lineHeights",
        "description": "H4 line height"
      },
      "letter-spacing": {
        "value": "{letter-spacing.1}",
        "type": "letterSpacing",
        "description": "H4 letter spacing"
      },
      "paragraph-spacing": {
        "value": "{spacing.1}",
        "type": "spacing",
        "description": "Spacing between <h4> and other elements with .usa-prose class"
      }
    },
    "h5-font": {
      "size": {
        "value": "{font-size.md}",
        "type": "fontSizes",
        "description": "H5 font size"
      },
      "family": {
        "value": "{font.heading}",
        "type": "fontFamilies",
        "description": "H5 font family"
      },
      "weight": {
        "value": "{font-weight.bold}",
        "type": "fontWeights",
        "description": "H5 font weight"
      },
      "line-height": {
        "value": "{line-height.3}",
        "type": "lineHeights",
        "description": "H5 line height"
      },
      "letter-spacing": {
        "value": "{letter-spacing.1}",
        "type": "letterSpacing",
        "description": "H5 letter spacing"
      },
      "paragraph-spacing": {
        "value": "{spacing.105}",
        "type": "spacing",
        "description": "Spacing between <h5> and other elements with .usa-prose class"
      }
    },
    "h6-font": {
      "size": {
        "value": "{font-size.sm}",
        "type": "fontSizes",
        "description": "H6 font size"
      },
      "family": {
        "value": "{font.sans}",
        "type": "fontFamilies",
        "description": "H6 font family"
      },
      "weight": {
        "value": "{font-weight.bold}",
        "type": "fontWeights",
        "description": "H6 font weight"
      },
      "line-height": {
        "value": "{line-height.3}",
        "type": "lineHeights",
        "description": "H6 line height"
      },
      "letter-spacing": {
        "value": "{letter-spacing.2}",
        "type": "letterSpacing",
        "description": "H6 letter spacing"
      },
      "text-transform": {
        "value": "uppercase",
        "type": "textTransform",
        "description": "H6 text transform"
      },
      "paragraph-spacing": {
        "value": "{spacing.05}",
        "type": "spacing",
        "description": "Spacing between <h6> and other elements with .usa-prose class"
      }
    },
    "letter-spacing": {
      "0": {
        "value": "0%",
        "type": "letterSpacing",
        "description": "0 letter spacing"
      },
      "1": {
        "value": "1%",
        "type": "letterSpacing",
        "description": "Slightly larger letter spacing",
        "a11y": "--a11y-letter-spacing-modifier"
      },
      "2": {
        "value": "20%",
        "type": "letterSpacing",
        "description": "Large letter spacing",
        "a11y": "--a11y-letter-spacing-modifier"
      },
      "3": {
        "value": "30%",
        "type": "letterSpacing",
        "description": "Largest letter spacing",
        "a11y": "--a11y-letter-spacing-modifier"
      },
      "neg-3": {
        "value": "-3%",
        "type": "letterSpacing",
        "description": "Smallest letter spacing",
        "a11y": "--a11y-letter-spacing-modifier"
      },
      "neg-2": {
        "value": "-2%",
        "type": "letterSpacing",
        "description": "Small letter spacing",
        "a11y": "--a11y-letter-spacing-modifier"
      },
      "neg-1": {
        "value": "-1%",
        "type": "letterSpacing",
        "description": "Slightly smaller letter spacing",
        "a11y": "--a11y-letter-spacing-modifier"
      },
      "auto": {
        "value": "initial",
        "type": "letterSpacing",
        "description": "Auto letter spacing"
      }
    },
    "lead-font": {
      "size": {
        "value": "{font-size.lg}",
        "type": "fontSizes",
        "description": "Lead font size"
      },
      "family": {
        "value": "{body-font.family}",
        "type": "fontFamilies",
        "description": "Lead font family"
      },
      "weight": {
        "value": "{font-weight.medium}",
        "type": "fontWeights",
        "description": "Lead font weight"
      },
      "line-height": {
        "value": "{line-height.3}",
        "type": "lineHeights",
        "description": "Lead line height"
      },
      "letter-spacing": {
        "value": "{letter-spacing.0}",
        "type": "letterSpacing",
        "description": "Lead letter spacing"
      },
      "max-width": {
        "value": "{measure.base}",
        "type": "maxWidth",
        "description": "Lead max width"
      },
      "paragraph-spacing": {
        "value": "{spacing.3}",
        "type": "spacing",
        "description": "Spacing between .usa-intro and other elements within .usa-prose class"
      }
    },
    "body": {
      "background": {
        "value": "{color-gray.2}",
        "type": "color",
        "description": "Body background color"
      },
      "ink": {
        "value": "{base.darkest}",
        "type": "color",
        "description": "Body text color"
      }
    },
    "input": {
      "font-family": {
        "value": "{font.sans}",
        "type": "fontFamilies",
        "description": "Font family"
      },
      "font-size": {
        "value": "{body-font.size}",
        "type": "fontSizes",
        "description": "Font size"
      },
      "font-weight": {
        "value": "{font-weight.normal}",
        "type": "fontWeights",
        "description": "Font weight"
      },
      "line-height": {
        "value": "{line-height.4}",
        "type": "lineHeights",
        "description": "Line height"
      },
      "letter-spacing": {
        "value": "{body-font.letter-spacing}",
        "type": "letterSpacing",
        "description": "Letter spacing"
      },
      "height": {
        "value": "{spacing.5}",
        "type": "sizes",
        "description": "Height"
      },
      "select-size": {
        "value": "{spacing.205}",
        "type": "sizes",
        "description": "Select size"
      },
      "max-width": {
        "value": "{spacing.mobile-lg}",
        "type": "sizes",
        "description": "Max width"
      },
      "margin-top": {
        "value": "{spacing.1}",
        "type": "spacing",
        "description": "Margin top"
      },
      "padding-x": {
        "value": "{spacing.1}",
        "type": "spacing",
        "description": "Padding x"
      },
      "padding-y": {
        "value": "{spacing.05}",
        "type": "spacing",
        "description": "Padding y"
      },
      "large-height": {
        "value": "{spacing.6}",
        "type": "spacing",
        "description": "Large height"
      },
      "border-width": {
        "value": "{border-width.1px}",
        "type": "borderWidths",
        "description": "Border width"
      },
      "border-color": {
        "value": "{black}",
        "type": "colors",
        "description": "Border color"
      },
      "border-color-hover": {
        "value": "{ink}",
        "type": "colors",
        "description": "Border color hover"
      },
      "color": {
        "value": "{ink}",
        "type": "colors",
        "description": "Color"
      },
      "placeholder-color": {
        "value": "{base}",
        "type": "colors",
        "description": "Placeholder color"
      },
      "background-color": {
        "value": "{white}",
        "type": "colors",
        "description": "Background color"
      },
      "border-radius": {
        "value": "{border-radius.0}",
        "type": "borderRadius",
        "description": "Border radius"
      },
      "search-min-width": {
        "value": "27ch",
        "type": "sizes",
        "description": "Search min width"
      },
      "disabled-border-color": {
        "value": "{disabled.light}",
        "type": "colors",
        "description": "Disabled border color"
      },
      "disabled-border-color-hover": {
        "value": "{input.disabled-border-color}",
        "type": "colors",
        "description": "Disabled border color hover"
      },
      "disabled-color": {
        "value": "{disabled}",
        "type": "colors",
        "description": "Disabled color"
      },
      "disabled-background-color": {
        "value": "{disabled.lighter}",
        "type": "colors",
        "description": "Disabled background color"
      },
      "label-font-size": {
        "value": "{body-font.size}",
        "type": "fontSizes",
        "description": "Label font size"
      },
      "label-font-family": {
        "value": "{body-font.family}",
        "type": "fontFamilies",
        "description": "Label font family"
      },
      "label-font-weight": {
        "value": "{body-font.weight}",
        "type": "fontWeights",
        "description": "Label font weight"
      },
      "label-color": {
        "value": "{ink}",
        "type": "colors",
        "description": "Label color"
      },
      "label-line-height": {
        "value": "{body-font.line-height}",
        "type": "lineHeights",
        "description": "Label line height"
      },
      "label-letter-spacing": {
        "value": "{body-font.letter-spacing}",
        "type": "letterSpacing",
        "description": "Label letter spacing"
      },
      "label-margin-bottom": {
        "value": "{spacing.05}",
        "type": "spacing",
        "description": "Label margin bottom"
      },
      "label-margin-top": {
        "value": "{spacing.2}",
        "type": "spacing",
        "description": "Label margin top"
      },
      "select-caret-color": {
        "value": "{input.color}",
        "type": "colors",
        "description": "Select caret color"
      }
    },
    "base": {
      "lightest": {
        "value": "{color.gray.5}",
        "type": "color",
        "description": "Base lightest color"
      },
      "lighter": {
        "value": "{color.gray.cool.10}",
        "type": "color",
        "description": "Base lighter color"
      },
      "light": {
        "value": "{color.gray.cool.30}",
        "type": "color",
        "description": "Base light color"
      },
      "base": {
        "value": "{color.gray.cool.50}",
        "type": "color",
        "description": "Base color"
      },
      "dark": {
        "value": "{color.gray.cool.60}",
        "type": "color",
        "description": "Base dark color"
      },
      "darker": {
        "value": "{color.gray.cool.70}",
        "type": "color",
        "description": "Base darker color"
      },
      "darkest": {
        "value": "{color.gray.90}",
        "type": "color",
        "description": "Base darkest color"
      }
    },
    "info": {
      "lighter": {
        "value": "#E9F6FC",
        "type": "color",
        "description": "Info lighter color"
      },
      "light": {
        "value": "#C2E7F7",
        "type": "color",
        "description": "Info light color"
      },
      "base": {
        "value": "#0D538C",
        "type": "color",
        "description": "Info color"
      },
      "dark": {
        "value": "{color.cyan.vivid.40}",
        "type": "color",
        "description": "Info dark color"
      },
      "darker": {
        "value": "{color.blue-cool.60}",
        "type": "color",
        "description": "Info darker color"
      }
    },
    "border": {
      "radius-0": {
        "value": "{spacing.0}",
        "type": "borderRadius",
        "description": "No border radius"
      },
      "radius-sm": {
        "value": "{spacing.2px}",
        "type": "borderRadius",
        "description": "Small border radius"
      },
      "radius-md": {
        "value": "{spacing.05}",
        "type": "borderRadius",
        "description": "Medium border radius"
      },
      "radius-lg": {
        "value": "{spacing.2}",
        "type": "borderRadius",
        "description": "Large border radius"
      },
      "radius-pill": {
        "value": "{spacing.tablet}",
        "type": "borderRadius",
        "description": "Pill border radius"
      },
      "color-lighter": {
        "value": "{base.lighter}",
        "type": "color",
        "description": "Border lighter color"
      },
      "color-light": {
        "value": "{base.light}",
        "type": "color",
        "description": "Border light color"
      },
      "color-base": {
        "value": "{base}",
        "type": "color",
        "description": "Border color"
      },
      "color-dark": {
        "value": "{base.dark}",
        "type": "color",
        "description": "Border dark color"
      },
      "color-darker": {
        "value": "{base.darker}",
        "type": "color",
        "description": "Border darker color"
      },
      "width-0": {
        "value": "{spacing.0}",
        "type": "borderWidth",
        "description": "No border width"
      },
      "width-sm": {
        "value": "{spacing.1px}",
        "type": "borderWidth",
        "description": "Small border width"
      },
      "width-md": {
        "value": "{spacing.2px}",
        "type": "borderWidth",
        "description": "Medium border width"
      },
      "width-lg": {
        "value": "{spacing.05}",
        "type": "borderWidth",
        "description": "Large border width"
      }
    },
    "color": {
      "black": {
        "value": "black",
        "type": "color",
        "description": "Black"
      },
      "white": {
        "value": "white",
        "type": "color",
        "description": "White"
      },
      "red": {
        "value": "#e52207",
        "type": "color",
        "description": "Red"
      },
      "red-warm": {
        "value": "{color.red-warm.40}",
        "type": "color",
        "description": "Red warm"
      },
      "orange": {
        "value": "#e66f0e",
        "type": "color",
        "description": "Orange"
      },
      "orange-warm": {
        "value": "{color.orange-warm.40}",
        "type": "color",
        "description": "Orange warm"
      },
      "gold": {
        "value": "#ffbe2e",
        "type": "color",
        "description": "Gold"
      },
      "yellow": {
        "value": "#FFDD11",
        "type": "color",
        "description": "Yellow"
      },
      "green-warm": {
        "value": "{color.green-warm.40}",
        "type": "color",
        "description": "Green warm"
      },
      "green": {
        "value": "#538200",
        "type": "color",
        "description": "Green"
      },
      "green-cool": {
        "value": "{color.green-cool.40}",
        "type": "color",
        "description": "Green cool"
      },
      "mint": {
        "value": "#04c585",
        "type": "color",
        "description": "Mint"
      },
      "mint-cool": {
        "value": "{color.mint-cool.40}",
        "type": "color",
        "description": "Mint cool"
      },
      "cyan": {
        "value": "{color.cyan.vivid.20}",
        "type": "color",
        "description": "Cyan"
      },
      "blue": {
        "value": "#0076d6",
        "type": "color",
        "description": "Blue"
      },
      "blue-warm": {
        "value": "{color.blue-warm.40}",
        "type": "color",
        "description": "Blue warm"
      },
      "indigo-cool": {
        "value": "{color.indigo-cool.40}",
        "type": "color",
        "description": "Indigo cool"
      },
      "indigo": {
        "value": "#676cc8",
        "type": "color",
        "description": "Indigo"
      },
      "indigo-warm": {
        "value": "{color.indigo-warm.40}",
        "type": "color",
        "description": "Indigo warm"
      },
      "violet": {
        "value": "#8168b3",
        "type": "color",
        "description": "Violet"
      },
      "violet-warm": {
        "value": "{color.violet-warm.40}",
        "type": "color",
        "description": "Violet warm"
      },
      "magenta": {
        "value": "#d72d79",
        "type": "color",
        "description": "Magenta"
      },
      "gray-cool": {
        "value": "{color.gray-cool.40}",
        "type": "color",
        "description": "Gray cool"
      },
      "gray": {
        "value": "gray",
        "type": "color",
        "description": "Gray"
      }
    },
    "spacing": {
      "0": {
        "value": "0",
        "type": "spacing",
        "description": "No spacing"
      },
      "1": {
        "value": "8px",
        "type": "spacing",
        "description": "Small spacing",
        "a11y": "--a11y-spacing-modifier"
      },
      "2": {
        "value": "16px",
        "type": "spacing",
        "description": "Medium spacing",
        "a11y": "--a11y-spacing-modifier"
      },
      "3": {
        "value": "24px",
        "type": "spacing",
        "description": "Large spacing",
        "a11y": "--a11y-spacing-modifier"
      },
      "4": {
        "value": "32px",
        "type": "spacing",
        "description": "Large spacing",
        "a11y": "--a11y-spacing-modifier"
      },
      "5": {
        "value": "40px",
        "type": "spacing",
        "description": "Large spacing",
        "a11y": "--a11y-spacing-modifier"
      },
      "6": {
        "value": "48px",
        "type": "spacing",
        "description": "Large spacing",
        "a11y": "--a11y-spacing-modifier"
      },
      "7": {
        "value": "56px",
        "type": "spacing",
        "description": "Large spacing",
        "a11y": "--a11y-spacing-modifier"
      },
      "8": {
        "value": "64px",
        "type": "spacing",
        "description": "Large spacing",
        "a11y": "--a11y-spacing-modifier"
      },
      "9": {
        "value": "72px",
        "type": "spacing",
        "description": "Large spacing",
        "a11y": "--a11y-spacing-modifier"
      },
      "10": {
        "value": "80px",
        "type": "spacing",
        "description": "Large spacing",
        "a11y": "--a11y-spacing-modifier"
      },
      "15": {
        "value": "120px",
        "type": "spacing",
        "description": "Largest spacing",
        "a11y": "--a11y-spacing-modifier"
      },
      "105": {
        "value": "12px",
        "type": "spacing",
        "description": "Medium spacing",
        "a11y": "--a11y-spacing-modifier"
      },
      "205": {
        "value": "20px",
        "type": "spacing",
        "description": "Medium spacing",
        "a11y": "--a11y-spacing-modifier"
      },
      "neg-15": {
        "value": "-120px",
        "type": "spacing",
        "description": "Largest negative spacing",
        "a11y": "--a11y-spacing-modifier"
      },
      "neg-10": {
        "value": "-80px",
        "type": "spacing",
        "description": "Large negative spacing",
        "a11y": "--a11y-spacing-modifier"
      },
      "neg-9": {
        "value": "-72px",
        "type": "spacing",
        "description": "Large negative spacing",
        "a11y": "--a11y-spacing-modifier"
      },
      "neg-8": {
        "value": "-64px",
        "type": "spacing",
        "description": "Large negative spacing",
        "a11y": "--a11y-spacing-modifier"
      },
      "neg-7": {
        "value": "-56px",
        "type": "spacing",
        "description": "Large negative spacing",
        "a11y": "--a11y-spacing-modifier"
      },
      "neg-6": {
        "value": "-48px",
        "type": "spacing",
        "description": "Large negative spacing",
        "a11y": "--a11y-spacing-modifier"
      },
      "neg-5": {
        "value": "-40px",
        "type": "spacing",
        "description": "Large negative spacing",
        "a11y": "--a11y-spacing-modifier"
      },
      "neg-4": {
        "value": "-32px",
        "type": "spacing",
        "description": "Large negative spacing",
        "a11y": "--a11y-spacing-modifier"
      },
      "neg-3": {
        "value": "-24px",
        "type": "spacing",
        "description": "Large negative spacing",
        "a11y": "--a11y-spacing-modifier"
      },
      "neg-205": {
        "value": "-20px",
        "type": "spacing",
        "description": "Medium negative spacing",
        "a11y": "--a11y-spacing-modifier"
      },
      "neg-2": {
        "value": "-16px",
        "type": "spacing",
        "description": "Medium negative spacing",
        "a11y": "--a11y-spacing-modifier"
      },
      "neg-105": {
        "value": "-12px",
        "type": "spacing",
        "description": "Medium negative spacing",
        "a11y": "--a11y-spacing-modifier"
      },
      "neg-1": {
        "value": "-8px",
        "type": "spacing",
        "description": "Small negative spacing",
        "a11y": "--a11y-spacing-modifier"
      },
      "neg-05": {
        "value": "-4px",
        "type": "spacing",
        "description": "Small negative spacing",
        "a11y": "--a11y-spacing-modifier"
      },
      "neg-2px": {
        "value": "-2px",
        "type": "spacing",
        "description": "Small negative spacing",
        "a11y": "--a11y-spacing-modifier"
      },
      "neg-1px": {
        "value": "-1px",
        "type": "spacing",
        "description": "Smallest negative spacing",
        "a11y": "--a11y-spacing-modifier"
      },
      "1px": {
        "value": "1px",
        "type": "spacing",
        "description": "Smallest spacing",
        "a11y": "--a11y-spacing-modifier"
      },
      "2px": {
        "value": "2px",
        "type": "spacing",
        "description": "Small spacing",
        "a11y": "--a11y-spacing-modifier"
      },
      "05": {
        "value": "4px",
        "type": "spacing",
        "description": "Small spacing",
        "a11y": "--a11y-spacing-modifier"
      },
      "card": {
        "value": "160px",
        "type": "spacing",
        "description": "Card spacing",
        "a11y": "--a11y-spacing-modifier"
      },
      "card-lg": {
        "value": "240px",
        "type": "spacing",
        "description": "Large card spacing",
        "a11y": "--a11y-spacing-modifier"
      },
      "mobile": {
        "value": "320px",
        "type": "spacing",
        "description": "Mobile spacing",
        "a11y": "--a11y-spacing-modifier"
      },
      "mobile-lg": {
        "value": "480px",
        "type": "spacing",
        "description": "Large mobile spacing",
        "a11y": "--a11y-spacing-modifier"
      },
      "tablet": {
        "value": "640px",
        "type": "spacing",
        "description": "Tablet spacing",
        "a11y": "--a11y-spacing-modifier"
      },
      "tablet-lg": {
        "value": "880px",
        "type": "spacing",
        "description": "Large tablet spacing",
        "a11y": "--a11y-spacing-modifier"
      },
      "desktop": {
        "value": "1024px",
        "type": "spacing",
        "description": "Desktop spacing",
        "a11y": "--a11y-spacing-modifier"
      },
      "desktop-lg": {
        "value": "1200px",
        "type": "spacing",
        "description": "Large desktop spacing",
        "a11y": "--a11y-spacing-modifier"
      },
      "widescreen": {
        "value": "1400px",
        "type": "spacing",
        "description": "Widescreen spacing",
        "a11y": "--a11y-spacing-modifier"
      }
    },
    "modal": {
      "background-color": {
        "value": "{accent-cool.base}",
        "type": "colors",
        "description": "Modal background color"
      },
      "footer-margin-top": {
        "value": "{spacing.3}",
        "type": "spacing",
        "description": "Modal footer margin top"
      },
      "close-icon-hover-color": {
        "value": "{white}",
        "type": "colors",
        "description": "Modal close icon hover color"
      },
      "close-icon-color": {
        "value": "{white}",
        "type": "colors",
        "description": "Modal close icon color"
      },
      "close-icon-size": {
        "value": "{spacing.3}",
        "type": "spacing",
        "description": "Modal close icon size"
      },
      "lg-max-width": {
        "value": "{spacing.widescreen}",
        "type": "spacing",
        "description": "Modal large max width"
      },
      "lg-content-max-width": {
        "value": "{spacing.widescreen}",
        "type": "spacing",
        "description": "Modal large content max width"
      },
      "default-max-width": {
        "value": "{spacing.tablet-lg}",
        "type": "spacing",
        "description": "Modal default max width"
      },
      "large-padding-x": {
        "value": "{spacing.0}",
        "type": "spacing",
        "description": "Modal large padding x"
      },
      "large-padding-y": {
        "value": "{spacing.0}",
        "type": "spacing",
        "description": "Modal large padding y"
      },
      "padding-x": {
        "value": "{spacing.205}",
        "type": "spacing",
        "description": "Modal padding x"
      },
      "padding-y": {
        "value": "{spacing.2}",
        "type": "spacing",
        "description": "Modal padding y"
      },
      "border-width": {
        "value": "{spacing.0}",
        "type": "spacing",
        "description": "Modal border width"
      },
      "border-color": {
        "value": "{base.lighter}",
        "type": "colors",
        "description": "Modal border color"
      },
      "text-color": {
        "value": "{ink}",
        "type": "colors",
        "description": "Modal text color"
      },
      "border-radius": {
        "value": "{border.radius.lg}",
        "type": "spacing",
        "description": "Modal border radius"
      },
      "overlay-background-color": {
        "value": "{color.black.transparent.70}",
        "type": "colors",
        "description": "Modal overlay background color"
      }
    }
  }
} as const;
