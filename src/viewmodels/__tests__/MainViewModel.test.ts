import { MainViewModel } from '../MainViewModel';
import { createInitialAppState } from '../../models/AppState';

describe('MainViewModel', () => {
  let viewModel: MainViewModel;

  beforeEach(() => {
    viewModel = new MainViewModel();
  });

  describe('Initial State', () => {
    it('should have initial state with zero counts', () => {
      const initialState = createInitialAppState();
      expect(viewModel.state).toEqual(initialState);
      expect(viewModel.state.firstButton.count).toBe(0);
      expect(viewModel.state.secondButton.count).toBe(0);
      expect(viewModel.state.modal.isVisible).toBe(false);
    });
  });

  describe('Button Interactions', () => {
    it('should increment first button count', () => {
      const initialCount = viewModel.state.firstButton.count;
      viewModel.incrementFirstButton();
      expect(viewModel.state.firstButton.count).toBe(initialCount + 1);
    });

    it('should increment second button count', () => {
      const initialCount = viewModel.state.secondButton.count;
      viewModel.incrementSecondButton();
      expect(viewModel.state.secondButton.count).toBe(initialCount + 1);
    });

    it('should update button labels with correct pluralization', () => {
      viewModel.incrementFirstButton();
      expect(viewModel.state.firstButton.label).toContain('1 time');
      
      viewModel.incrementFirstButton();
      expect(viewModel.state.firstButton.label).toContain('2 times');
    });
  });

  describe('Modal Interactions', () => {
    it('should open modal', () => {
      viewModel.openModal();
      expect(viewModel.state.modal.isVisible).toBe(true);
    });

    it('should close modal', () => {
      viewModel.openModal();
      viewModel.closeModal();
      expect(viewModel.state.modal.isVisible).toBe(false);
    });
  });

  describe('State Change Callback', () => {
    it('should call state change callback when state updates', () => {
      const mockCallback = jest.fn();
      viewModel.setStateChangeCallback(mockCallback);
      
      viewModel.incrementFirstButton();
      expect(mockCallback).toHaveBeenCalledWith(viewModel.state);
    });
  });
});
