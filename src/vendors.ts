import '@angular/platform-browser-dynamic';
import '@angular/core';
import '@angular/common';
import '@angular/http';
import '@angular/router';
import '@angular/forms';

if (process && process.env && !process.env.DEVELOPMENT) {
  require('@angular/compiler');
}

import 'normalize.css/normalize.css';
