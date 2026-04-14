import { Component } from '@angular/core';
import { App } from './app';
import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import {  DashboardComponent } from './pages/dashboard/dashboard';
import { Vendor } from './pages/vendor/vendor';


export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    {path : 'login' ,component: Login},
    {path : 'register' ,component: Register},
    { path: 'dashboard', component: DashboardComponent },
     { path: 'vendor', component: Vendor },

];

