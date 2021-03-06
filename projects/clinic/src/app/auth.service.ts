import { Injectable } from '@angular/core';
import { delay } from 'rxjs/internal/operators';
// import ในส่วนที่จะใช้งานกับ Observable
import { Observable,of } from 'rxjs';
import { tap, map } from 'rxjs/operators';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
 
@Injectable()
export class AuthService {
 
  public isLoggedIn:boolean = false; // กำหนดสถานะล็อกอินเริ่มต้นเป็น false
  public redirectUrl: string=""; // กำหนดตัวแปรสำหรับเก็บ url ที่จะลิ้งค์ไป
 
  constructor() { }
 
  // ฟังก์ชั่นจำลองการล็อกอิน คืนค่าเป็น Observable
  login(): Observable<boolean> {
    // เมื่อล็อกอิน
    return of(true) // ให้คืนค่า true
    .pipe(delay(3000),tap(val => this.isLoggedIn = true)); // หลังจาก delay 3 วินาที
     // เมื่อถึงเวลาให้กำหนดค่าสถานะเป็น true
  }
   
  // ฟังก์ชั่นจำลองการล็อกเอาท์
  logout(): void {
    // ให้ค่าสถานะล็อกอินเป็น false
    this.isLoggedIn = false;
  }  
 
}