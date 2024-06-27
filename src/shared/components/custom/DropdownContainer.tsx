import { MoreHorizontal } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  Button,
} from '..';
import { Fragment, ReactNode } from 'react';

interface BaseDropdownContent {
  text: string;
  separator?: boolean;
}
interface DropdownLabelProps extends BaseDropdownContent {
  type: 'label';
}
interface DropdownButtonProps extends BaseDropdownContent {
  type: 'button';
  onClick: () => void;
}

export type DropdownContent = DropdownLabelProps | DropdownButtonProps;
export interface DropdownContainerProps {
  contents: DropdownContent[];
}

function isDropdownLabel(value: DropdownContent): value is DropdownLabelProps {
  return value.type === 'label';
}
function isDropdownButton(
  value: DropdownContent
): value is DropdownButtonProps {
  return value.type === 'button';
}

export default function DropdownContainer({
  contents,
}: DropdownContainerProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button aria-haspopup="true" size="icon" variant="ghost">
          <MoreHorizontal className="h-4 w-4" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {contents.map((content) => {
          const contentElement: ReactNode[] = [];
          if (isDropdownButton(content))
            contentElement.push(
              <DropdownMenuItem key={Math.random()} onClick={content.onClick}>
                {content.text}
              </DropdownMenuItem>
            );

          if (isDropdownLabel(content))
            contentElement.push(
              <DropdownMenuLabel key={Math.random()}>
                {content.text}
              </DropdownMenuLabel>
            );

          if (content.separator)
            contentElement.push(<DropdownMenuSeparator key={Math.random()} />);

          return <Fragment key={Math.random()}>{contentElement}</Fragment>;
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
