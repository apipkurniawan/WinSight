//! hanya sample
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()
class SampleGuard implements CanActivate {
  constructor() {}

  canActivate() {
    return true;
  }
}
