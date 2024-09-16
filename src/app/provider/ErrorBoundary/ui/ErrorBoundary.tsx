import { ErrorPage } from "pages/ErrorPage";
import React, { type ReactNode, type ErrorInfo } from "react";
import { ErrorBoundarySecondaryScreen } from "widgets/ErrorBoundarySecondaryScreen";

interface ErrorBoundaryProps {
  children: ReactNode;
}
interface ErrorBoundaryState {
  hasError: boolean;
}
class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    // Обновить состояние с тем, чтобы следующий рендер показал запасной UI.
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Можно также сохранить информацию об ошибке в соответствующую службу журнала ошибок
    // biome-ignore lint/suspicious/noConsoleLog: <explanation>
    console.log(error, errorInfo);
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;
    if (hasError) {
      // Можно отрендерить запасной UI произвольного вида
      return <ErrorBoundarySecondaryScreen />;
    }

    return children;
  }
}

export default ErrorBoundary;
