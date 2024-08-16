import { Course, CourseCategory } from "src/app/core/services/apps/academy/academy.types";

export const courseCategoriesData: CourseCategory[] = [
    {
        id: '9a67dff7-3c38-4052-a335-0cef93438ff6',
        title: 'Web',
        slug: 'web',
    },
    {
        id: 'a89672f5-e00d-4be4-9194-cb9d29f82165',
        title: 'Firebase',
        slug: 'firebase',
    },
    {
        id: '02f42092-bb23-4552-9ddb-cfdcc235d48f',
        title: 'Cloud',
        slug: 'cloud',
    },
    {
        id: '5648a630-979f-4403-8c41-fc9790dea8cd',
        title: 'Android',
        slug: 'android',
    },
];


export const coursesData: Course[] = [
    {
        id: '694e4e5f-f25f-470b-bd0e-26b1d4f64028',
        title: 'Basics of Angular',
        slug: 'basics-of-angular',
        description: 'Introductory course for Angular and framework basics',
        category: 'web',
        duration: 30,
        totalSteps: 11,
        featured: true,
        progress: {
            currentStep: 3,
            completed: 2,
        },
    },
    {
        id: 'f924007a-2ee9-470b-a316-8d21ed78277f',
        title: 'Basics of TypeScript',
        slug: 'basics-of-typeScript',
        description: 'Beginner course for Typescript and its basics',
        category: 'web',
        duration: 60,
        totalSteps: 11,
        featured: true,
        progress: {
            currentStep: 5,
            completed: 3,
        },
    },
    {
        id: '0c06e980-abb5-4ba7-ab65-99a228cab36b',
        title: 'Android N: Quick Settings',
        slug: 'android-n-quick-settings',
        description: 'Step by step guide for Android N: Quick Settings',
        category: 'android',
        duration: 120,
        totalSteps: 11,
        featured: false,
        progress: {
            currentStep: 10,
            completed: 1,
        },
    },
    {
        id: '1b9a9acc-9a36-403e-a1e7-b11780179e38',
        title: 'Build an App for the Google Assistant with Firebase',
        slug: 'build-an-app-for-the-google-assistant-with-firebase',
        description: 'Dive deep into Google Assistant apps using Firebase',
        category: 'firebase',
        duration: 30,
        totalSteps: 11,
        featured: false,
        progress: {
            currentStep: 4,
            completed: 3,
        },
    },
    {
        id: '55eb415f-3f4e-4853-a22b-f0ae91331169',
        title: 'Keep Sensitive Data Safe and Private',
        slug: 'keep-sensitive-data-safe-and-private',
        description: 'Learn how to keep your important data safe and private',
        category: 'android',
        duration: 45,
        totalSteps: 11,
        featured: false,
        progress: {
            currentStep: 6,
            completed: 0,
        },
    },
    {
        id: 'fad2ab23-1011-4028-9a54-e52179ac4a50',
        title: "Manage Your Pivotal Cloud Foundry App's Using Apigee Edge",
        slug: 'manage-your-pivotal-cloud-foundry-apps-using-apigee-Edge',
        description: 'Introductory course for Pivotal Cloud Foundry App',
        category: 'cloud',
        duration: 90,
        totalSteps: 11,
        featured: false,
        progress: {
            currentStep: 6,
            completed: 0,
        },
    },
    {
        id: 'c4bc107b-edc4-47a7-a7a8-4fb09732e794',
        title: 'Build a PWA Using Workbox',
        slug: 'build-a-pwa-using-workbox',
        description: 'Step by step guide for building a PWA using Workbox',
        category: 'web',
        duration: 120,
        totalSteps: 11,
        featured: false,
        progress: {
            currentStep: 0,
            completed: 0,
        },
    },
    {
        id: '1449f945-d032-460d-98e3-406565a22293',
        title: 'Cloud Functions for Firebase',
        slug: 'cloud-functions-for-firebase',
        description: 'Beginners guide of Firebase Cloud Functions',
        category: 'firebase',
        duration: 45,
        totalSteps: 11,
        featured: false,
        progress: {
            currentStep: 3,
            completed: 1,
        },
    },
    {
        id: 'f05e08ab-f3e3-4597-a032-6a4b69816f24',
        title: 'Building a gRPC Service with Java',
        slug: 'building-a-grpc-service-with-java',
        description: 'Learn more about building a gRPC Service with Java',
        category: 'cloud',
        duration: 30,
        totalSteps: 11,
        featured: false,
        progress: {
            currentStep: 0,
            completed: 1,
        },
    },
    {
        id: '181728f4-87c8-45c5-b9cc-92265bcd2f4d',
        title: 'Looking at Campaign Finance with BigQuery',
        slug: 'looking-at-campaign-finance-with-bigquery',
        description: 'Dive deep into BigQuery: Campaign Finance',
        category: 'cloud',
        duration: 60,
        totalSteps: 11,
        featured: false,
        progress: {
            currentStep: 0,
            completed: 0,
        },
    },
    {
        id: 'fcbfedbf-6187-4b3b-89d3-1a7cb4e11616',
        title: 'Personalize Your iOS App with Firebase User Management',
        slug: 'personalize-your-ios-app-with-firebase-user-management',
        description:
            'Dive deep into User Management on iOS apps using Firebase',
        category: 'firebase',
        duration: 90,
        totalSteps: 11,
        featured: false,
        progress: {
            currentStep: 0,
            completed: 0,
        },
    },
    {
        id: '5213f6a1-1dd7-4b1d-b6e9-ffb7af534f28',
        title: 'Customize Network Topology with Subnetworks',
        slug: 'customize-network-topology-with-subnetworks',
        description: 'Dive deep into Network Topology with Subnetworks',
        category: 'web',
        duration: 45,
        totalSteps: 11,
        featured: false,
        progress: {
            currentStep: 0,
            completed: 0,
        },
    },
    {
        id: '02992ac9-d1a3-4167-b70e-8a1d5b5ba253',
        title: 'Building Beautiful UIs with Flutter',
        slug: 'building-beautiful-uis-with-flutter',
        description:
            "Dive deep into Flutter's hidden secrets for creating beautiful UIs",
        category: 'web',
        duration: 90,
        totalSteps: 11,
        featured: false,
        progress: {
            currentStep: 8,
            completed: 2,
        },
    },
    {
        id: '2139512f-41fb-4a4a-841a-0b4ac034f9b4',
        title: 'Firebase Android',
        slug: 'firebase-android',
        description: 'Beginners guide of Firebase for Android',
        category: 'android',
        duration: 45,
        totalSteps: 11,
        featured: false,
        progress: {
            currentStep: 0,
            completed: 0,
        },
    },
    {
        id: '65e0a0e0-d8c0-4117-a3cb-eb74f8e28809',
        title: 'Simulating a Thread Network Using OpenThread',
        slug: 'simulating-a-thread-network-using-openthread',
        description:
            'Introductory course for OpenThread and Simulating a Thread Network',
        category: 'web',
        duration: 45,
        totalSteps: 11,
        featured: false,
        progress: {
            currentStep: 0,
            completed: 0,
        },
    },
    {
        id: 'c202ebc9-9be3-433a-9d38-7003b3ed7b7a',
        title: 'Your First Progressive Web App',
        slug: 'your-first-progressive-web-app',
        description: 'Step by step guide for creating a PWA from scratch',
        category: 'web',
        duration: 30,
        totalSteps: 11,
        featured: false,
        progress: {
            currentStep: 0,
            completed: 0,
        },
    },
    {
        id: '980ae7da-9f77-4e30-aa98-1b1ea594e775',
        title: 'Launch Cloud Datalab',
        slug: 'launch-cloud-datalab',
        description: 'From start to finish: Launch Cloud Datalab',
        category: 'cloud',
        duration: 60,
        totalSteps: 11,
        featured: false,
        progress: {
            currentStep: 0,
            completed: 0,
        },
    },
    {
        id: 'c9748ea9-4117-492c-bdb2-55085b515978',
        title: 'Cloud Firestore',
        slug: 'cloud-firestore',
        description: 'Step by step guide for setting up Cloud Firestore',
        category: 'firebase',
        duration: 90,
        totalSteps: 11,
        featured: false,
        progress: {
            currentStep: 2,
            completed: 0,
        },
    },
];