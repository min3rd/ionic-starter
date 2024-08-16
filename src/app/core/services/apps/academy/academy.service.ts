import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { BaseService } from 'src/app/core/base/base.service';
import { Course, CourseCategory } from './academy.types';
import { Endpoint } from 'src/app/core/constants/endpoint';
import { Pageable } from 'src/app/@vn9melody/types/pageable';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AcademyService extends BaseService {
  private _courseCategories: BehaviorSubject<CourseCategory[]> = new BehaviorSubject<any>(null);
  private _courses: BehaviorSubject<Course[]> = new BehaviorSubject<any>(null);
  private _course: BehaviorSubject<Course | null> = new BehaviorSubject<any>(null);
  get courseCategories$(): Observable<CourseCategory[]> {
    return this._courseCategories.asObservable();
  }
  get courses$(): Observable<Course[]> {
    return this._courses.asObservable();
  }
  get course$(): Observable<Course | null> {
    return this._course.asObservable();
  }

  categories(): Observable<CourseCategory[]> {
    return this.httpClient.get<CourseCategory[]>(Endpoint.academy_categories()).pipe(tap(courseCategories => {
      this._courseCategories.next(courseCategories);
    }));
  }

  search(pageable: Pageable): Observable<Course[]> {
    return this.httpClient.get<Course[]>(Endpoint.academy_courses(), {
      params: new HttpParams({ fromObject: pageable as any }),
    }).pipe(tap(courses => {
      this._courses.next(courses);
    }));
  }
}
