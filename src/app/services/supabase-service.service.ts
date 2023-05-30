import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SupabaseServiceService {

  constructor(public supabase : HttpClient) { }

  public actualizarTapitas(){
    const API = "https://qqvtbarxllllhjrmlnmc.supabase.co/rest/v1/IR?select=contador"
    const headers = new HttpHeaders(
      {
        'apikey' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFxdnRiYXJ4bGxsbGhqcm1sbm1jIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQ4NzEzOTgsImV4cCI6MjAwMDQ0NzM5OH0.4WLqXcjQ2Sh0Ai9YzQ_WgUSC9hP-AgDAba-MECLZv8Q',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFxdnRiYXJ4bGxsbGhqcm1sbm1jIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQ4NzEzOTgsImV4cCI6MjAwMDQ0NzM5OH0.4WLqXcjQ2Sh0Ai9YzQ_WgUSC9hP-AgDAba-MECLZv8Q'
      }
    );
    return this.supabase.get(API, {headers: headers});
  }
}