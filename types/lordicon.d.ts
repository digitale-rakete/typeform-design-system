declare module '@lordicon/react' {
  import * as React from 'react'

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
