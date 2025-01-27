import { Translations } from '../../../../components/translations/translations.component';
import { API_URL } from '../../../../configs/url-params.config';
import { UserInterface } from '../../../../interfaces/user.interface';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';
import { RegisterDialogComponent } from '../register-dialog/register-dialog.component';
import { UserService } from '../../../../services/user-service/user.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { LanguageService } from '../../../../services/language/language.service';

@Component({
    selector: 'app-user-panel',
    templateUrl: './user-panel.component.html',
    styleUrls: ['./user-panel.component.less'],
})
export class UserPanelComponent extends Translations implements OnInit, OnDestroy {
    public user: UserInterface;
    public apiUrl = API_URL;

    private onDestroy$ = new Subject<void>();

    constructor(
        private dialog: MatDialog,
        private userService: UserService,
        private router: Router,
        protected languageService: LanguageService,
    ) {
        super(languageService);
    }

    ngOnInit(): void {
        this.userService
            .getCurrentUser$()
            .pipe(takeUntil(this.onDestroy$))
            .subscribe((user: UserInterface) => (this.user = user));

        super.ngOnInit();
    }

    ngOnDestroy(): void {
        this.onDestroy$.next();
        this.onDestroy$.complete();
        super.ngOnDestroy();
    }

    public onLoginClick(): void {
        this.dialog.open(LoginDialogComponent, { data: { login: '', password: '' } });
    }

    public onRegisterClick(): void {
        this.dialog.open(RegisterDialogComponent);
    }

    public onLogoutClick(): void {
        this.userService.logout();
    }

    public onProfileClick(): void {
        this.router.navigate([`/profile/${this.user.id}`]);
    }
}
