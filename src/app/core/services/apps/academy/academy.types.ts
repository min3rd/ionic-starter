import { Base } from "src/app/core/base/base.types";

export interface CourseCategory extends Base {
    title?: string;
    slug?: string;
}

export interface Course extends Base {
    title?: string;
    slug?: string;
    description?: string;
    category?: string;
    duration?: number;
    totalSteps?: number;
    featured?: boolean;
    progress?: Progress;
    steps?: Step[];
}

export interface Step extends Base {
    order?: number;
    title?: string;
    subtitle?: string;
    content?: string;
}

export interface Progress {
    currentStep?: number;
    completed?: number;
}