import { Component, ElementRef, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TokenToCssService } from 'src/app/services/token-to-css.service';
import { ToolboxService } from 'src/app/services/toolbox.service';
import defaultTokenObj from './tokens';
import { ThemeService } from 'src/app/services/theme.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-h5',
  templateUrl: './h5.component.html',
  styleUrls: ['./h5.component.scss']
})
export class FontH5Component {
  tokenForm!: FormGroup;
  themeSubscription!: Subscription;
  currentTheme!: string;

  defaultTokenArr: any[] = [];
  defaultVars: any[] = [];

  currentTokenArr: any[] = [];
  currentVars = [...this.defaultVars];

  constructor(
    private tokenToCssService: TokenToCssService,
    private el: ElementRef,
    private renderer: Renderer2,
    private fb: FormBuilder,
    private toolboxService: ToolboxService,
    private themeService: ThemeService
  ) {
    this.themeSubscription = this.themeService.getTheme().subscribe((theme) => {
      this.currentTheme = theme;
      if (defaultTokenObj.hasOwnProperty(theme as string)) {
      } else {
        console.error(`Theme '${theme}' not found in defaultTokenObj`);
        this.currentTheme = 'base';
      }
      (this.defaultTokenArr = this.toolboxService.convertObjectToArray(
        defaultTokenObj[this.currentTheme]
      )),
        'name';
      this.currentTokenArr = [...this.defaultTokenArr];
      let cssVars = this.tokenToCssService.cssVars(
        defaultTokenObj[this.currentTheme],
        'usa',
        'h5-font'
      );
      this.currentVars = this.tokenToCssService.parseCssVariables(cssVars);
      this.buildForm();
      this.applyStyles();
    });
  }

  buildForm() {
    const formControls = this.currentTokenArr.reduce((controls, token) => {
      controls[token.name] = this.fb.control(token.value);
      return controls;
    }, {});

    this.tokenForm = this.fb.group(formControls);
  }

  generateNewTokenJSON() {
    console.log(
      this.tokenToCssService.generateTokenObjectWithFormValues(
        defaultTokenObj[this.currentTheme],
        this.tokenForm.value
      )
    );
  }

  applyStyles() {
    const css = this.tokenToCssService.generateCssFromFormValue(
      this.tokenForm.value,
      'usa',
      'h5-font'
    );

    this.tokenToCssService.injectCssStyleTag(css, 'h5-font');
  }

 

  resetStyles() {
    const styleTag = document.getElementById('h5-font') as HTMLStyleElement;
    if (styleTag) {
      styleTag.innerHTML = '';
    }
  }

  ngOnInit() {
  }

  ngAfterViewInit() {}

  ngOnDestroy() {
    this.themeSubscription.unsubscribe();
    this.resetStyles();
  }
}
