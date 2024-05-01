import toastr from 'toastr';

toastr.options = {
  closeButton: true,
  debug: false,
  newestOnTop: false,
  progressBar: true,
  positionClass: 'toast-top-right',
  preventDuplicates: false,
  onclick:  (event) => {
    console.log('Toast clicked:', event);
  },
  showDuration: 300,
  hideDuration: 1000,
  timeOut: 5000,
  extendedTimeOut: 1000,
  showEasing: 'swing',
  hideEasing: 'linear',
  showMethod: 'fadeIn',
  hideMethod: 'fadeOut'
};

export function showMessage(title: string, message: string, type: 'success' | 'error' | 'warning') {
  toastr[type](message, title);
}

export function messageError(message: string) {
  showMessage('Error', message, 'error');
}

export function messageSuccess(message: string) {
  showMessage('Success', message, 'success');
}

export function messageWarning(message: string) {
  showMessage('Warning', message, 'warning');
}
