import { Component, Input } from '@angular/core';
import { SimpleIcon } from 'simple-icons';
import * as SimpleIcons from 'simple-icons';

type TechIconKey =
  | 'angular'
  | 'typescript'
  | 'javascript'
  | 'html5'
  | 'css3'
  | 'tailwindcss'
  | 'bootstrap'
  | 'reactivex'
  | 'openjdk'
  | 'springboot'
  | 'springsecurity'
  | 'dotnet'
  | 'nodedotjs'
  | 'fastapi'
  | 'python'
  | 'postgresql'
  | 'mysql'
  | 'mongodb'
  | 'redis'
  | 'docker'
  | 'git'
  | 'github'
  | 'linux'
  | 'cloudinary'
  | 'rabbitmq'
  | 'kotlin'
  | 'android'
  | 'cursor'
  | 'githubcopilot'
  | 'swift'
  | 'ios'
  | 'postman'
  | 'intellijidea'
  | 'figma'
  | 'swagger'
  | 'supabase'
  | 'bruno'
  | 'neon'
  | 'render'
  | 'vercel'
  | 'firebase'
  | 'netlify';

const TECH_ICON_MAP: Partial<Record<TechIconKey, SimpleIcon>> = {
  angular: SimpleIcons.siAngular,
  typescript: SimpleIcons.siTypescript,
  javascript: SimpleIcons.siJavascript,
  html5: SimpleIcons.siHtml5,
  css3: SimpleIcons.siCss,
  tailwindcss: SimpleIcons.siTailwindcss,
  bootstrap: SimpleIcons.siBootstrap,
  reactivex: SimpleIcons.siReactivex,
  openjdk: SimpleIcons.siOpenjdk,
  springboot: SimpleIcons.siSpringboot,
  springsecurity: SimpleIcons.siSpringsecurity,
  nodedotjs: SimpleIcons.siNodedotjs,
  fastapi: SimpleIcons.siFastapi,
  python: SimpleIcons.siPython,
  postgresql: SimpleIcons.siPostgresql,
  mysql: SimpleIcons.siMysql,
  mongodb: SimpleIcons.siMongodb,
  redis: SimpleIcons.siRedis,
  docker: SimpleIcons.siDocker,
  git: SimpleIcons.siGit,
  supabase: SimpleIcons.siSupabase,
  dotnet: SimpleIcons.siDotnet,
  github: SimpleIcons.siGithub,
  linux: SimpleIcons.siLinux,
  cloudinary: SimpleIcons.siCloudinary,
  rabbitmq: SimpleIcons.siRabbitmq,
  cursor: SimpleIcons.siCursor,
  githubcopilot: SimpleIcons.siGithubcopilot,
  kotlin: SimpleIcons.siKotlin,
  android: SimpleIcons.siAndroid,
  swift: SimpleIcons.siSwift,
  ios: SimpleIcons.siIos,
  postman: SimpleIcons.siPostman,
  intellijidea: SimpleIcons.siIntellijidea,
  figma: SimpleIcons.siFigma,
  swagger: SimpleIcons.siSwagger,
  bruno: SimpleIcons.siBruno,
  neon: SimpleIcons.siNeon,
  render: SimpleIcons.siRender,
  vercel: SimpleIcons.siVercel,
  netlify: SimpleIcons.siNetlify,
  firebase: SimpleIcons.siFirebase,
};
@Component({
  selector: 'app-tech-icon',
  standalone: true,
  host: {
    class: 'flex shrink-0 items-center justify-center',
  },
  template: `
    @if (icon(); as resolvedIcon) {
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        class="h-full w-full text-foreground-secondary"
        fill="currentColor"
      >
        <path [attr.d]="resolvedIcon.path"></path>
      </svg>
    } @else {
      <span
        class="flex h-full w-full items-center justify-center rounded-full border border-surface-border bg-surface-card text-[8px] font-semibold text-brand-light"
      >
        {{ fallback }}
      </span>
    }
  `,
})
export class TechIconComponent {
  @Input({ required: true }) key = '';
  @Input() fallback = '';

  icon(): SimpleIcon | undefined {
    return TECH_ICON_MAP[this.key as TechIconKey];
  }
}
