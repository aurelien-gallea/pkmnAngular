import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
    selector: "[pkmnBorderCard]",
})
export class BorderCardDirective {
	initialColor : string = "#f5f5f5";
	defaultColor : string = "#009688";
	defaultHeight : number = 180;

    constructor(private el: ElementRef) {
        this.setBorder(this.initialColor);
        this.setHeight(this.defaultHeight);
    }

	@Input('borderColor') borderColor : string;
	
	
    @HostListener("mouseenter") onMouseEnter() {
        this.setBorder(this.borderColor || this.defaultColor);
    }
    @HostListener("mouseleave") onMouseLeave() {
        this.setBorder(this.initialColor);
    }
    private setHeight(heigth: number) {
        this.el.nativeElement.style.heigth = `${heigth}px`;
    }

    private setBorder(color: string) {
        this.el.nativeElement.style.border = `solid 4px ${color}`;
    }
}
