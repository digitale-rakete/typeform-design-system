import * as React from 'react'

declare module '@lordicon/react' {
  export interface PlayerProps {
    icon: string
    size?: number
    colorize?: string
    onComplete?: () => void
  }

  export class Player extends React.Component<PlayerProps> {
    playFromBeginning(): void
  }

  export type PlayerRef = React.RefObject<Player>
}

// Extend JSX to recognize lord-icon custom element
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lord-icon': {
        src?: string
        trigger?: string
        colors?: string
        style?: React.CSSProperties
        ref?: React.Ref<HTMLElement>
      }
    }
  }
}

// This export makes TypeScript treat this as a module
export {}
