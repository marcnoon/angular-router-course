import {inject, Inject} from '@angular/core';
import {ResolveFn, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {LessonDetail} from '../model/lesson-detail';
import {CoursesService} from './courses.service';
import {Observable} from 'rxjs';


export const LessonDetailResolver: ResolveFn<LessonDetail> = (route, state) => {
    const coursesService = inject(CoursesService);
    const courseUrl = route.paramMap.get("courseUrl");
    const lessonSeqNo = route.paramMap.get("lessonSeqNo");

    return coursesService.loadLessonDetail(courseUrl, lessonSeqNo);
};
