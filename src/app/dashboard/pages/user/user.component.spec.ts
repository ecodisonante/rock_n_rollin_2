import { ComponentFixture, TestBed } from '@angular/core/testing';
import UserComponent from './user.component';
import { By } from '@angular/platform-browser';


describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should fail if empty', () => {
    expect(component.userForm.invalid).toBeTrue();
  });


  it('should fail less than 13 years user', () => {
    const form = fixture.componentInstance.userForm;
    let fechanac = form.controls['fechanac'];

    fechanac.setValue(new Date(2020, 11, 25));
    fechanac.updateValueAndValidity();

    expect(fechanac.errors && fechanac.errors['requiredAge']).toEqual(13);
  });


  it('should fail password lenght validator', () => {
    const form = fixture.componentInstance.userForm;
    let pass = form.controls['passwd'];

    pass.setValue("123");
    pass.updateValueAndValidity();
    expect(pass.errors && pass.errors['passwordStrength']).toEqual("Contraseña debe tener entre 6 y 18 caracteres");
  });


  it('should fail password strength validator', () => {
    const form = fixture.componentInstance.userForm;
    let pass = form.controls['passwd'];

    pass.setValue("123456");
    pass.updateValueAndValidity();
    expect(pass.errors && pass.errors['passwordStrength']).toEqual("Contraseña debe tener mayúsculas, minúsculas y números");
  });


  it('should fail password match validator', () => {
    const form = fixture.componentInstance.userForm;
    let pass = form.controls['passwd'];
    let repass = form.controls['repasswd'];

    pass.setValue("Abc123");
    repass.setValue("Def456");
    repass.updateValueAndValidity();

    expect(repass.errors && repass.errors['passwordMatch']).toBeTruthy();
  });



  it('should register successfully', () => {
    const form = fixture.componentInstance.userForm;

    form.controls['nombres'].setValue('John');
    form.controls['apePat'].setValue('Doe');
    form.controls['apeMat'].setValue('Doe');
    form.controls['fechanac'].setValue(new Date(2000, 11, 25));
    form.controls['direccion'].setValue('The Street');
    form.controls['usuario'].setValue('johndoe');
    form.controls['correo'].setValue('jd@test.com');
    form.controls['passwd'].setValue('Abc123');
    form.controls['repasswd'].setValue('Abc123');

    form.updateValueAndValidity();

    const button = fixture.debugElement.query(By.css("#userBtn"));
    button.nativeElement.click();

    expect(fixture.componentInstance.successRegister).toBeTrue;
  });




});
