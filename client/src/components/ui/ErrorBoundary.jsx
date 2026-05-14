import React from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle, RefreshCw } from 'lucide-react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    console.error('[ErrorBoundary]', error, info);
  }

  handleReload = () => {
    this.setState({ hasError: false, error: null });
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-bg-primary flex items-center justify-center px-6">
          <div className="text-center max-w-md">
            {/* Logo */}
            <div className="flex items-center justify-center gap-2 mb-10">
              <div className="w-9 h-9 bg-brand-primary rounded-lg flex items-center justify-center font-display font-bold text-white">
                N
              </div>
              <span className="font-display font-bold text-xl text-text-primary">
                Nexora <span className="text-text-secondary font-normal">Studio</span>
              </span>
            </div>

            <div className="w-16 h-16 bg-error/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <AlertTriangle size={28} className="text-error" />
            </div>

            <h1 className="font-display font-bold text-3xl text-text-primary mb-4">
              Something went wrong
            </h1>
            <p className="text-text-secondary font-body text-sm leading-relaxed mb-8">
              An unexpected error occurred. Our team has been notified. You can try
              reloading the page or go back to the home page.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={this.handleReload}
                className="inline-flex items-center gap-2 px-6 py-3 bg-brand-primary text-white font-body font-semibold rounded-xl hover:bg-opacity-90 transition-all duration-200 text-sm"
              >
                <RefreshCw size={15} /> Reload Page
              </button>
              <Link
                to="/"
                className="text-text-secondary text-sm font-body hover:text-text-primary transition-colors"
              >
                ← Go to Home
              </Link>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
