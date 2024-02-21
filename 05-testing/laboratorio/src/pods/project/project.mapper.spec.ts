import { mapProjectFromApiToVm } from './project.mapper';
import * as viewModel from './project.vm';
import * as apiModel from './api/project.api-model';

describe('pods/project/project.mapper spec', () => {
  describe('mapProjectFromApiToVm', () => {
    it('should return empty project when feeding null value', () => {
      // Arrange
      const project = null;

      // Act
      const result = mapProjectFromApiToVm(project);

      // Assert
      expect(result).toEqual(viewModel.createEmptyProject());
    });

    it('should return empty project when feeding undefined value', () => {
      // Arrange
      const project = undefined;

      // Act
      const result = mapProjectFromApiToVm(project);

      // Assert
      expect(result).toEqual(viewModel.createEmptyProject());
    });

    it('should return expected result but feeding null employee list', () => {
      // Arrange
      const project: apiModel.Project = {
        id: 'project id',
        name: 'project name',
        externalId: 'external id',
        comments: 'project comments',
        isActive: true,
        employees: null,
      };

      const expectedResult: viewModel.Project = {
        id: 'project id',
        name: 'project name',
        externalId: 'external id',
        comments: 'project comments',
        isActive: true,
        employees: [],
      };

      // Act
      const result = mapProjectFromApiToVm(project);

      // Assert
      expect(result).toEqual(expectedResult);
    });

    it('should return expected result but feeding undefined employee list', () => {
      // Arrange
      const project: apiModel.Project = {
        id: 'project id',
        name: 'project name',
        externalId: 'external id',
        comments: 'project comments',
        isActive: true,
        employees: undefined,
      };

      const expectedResult: viewModel.Project = {
        id: 'project id',
        name: 'project name',
        externalId: 'external id',
        comments: 'project comments',
        isActive: true,
        employees: [],
      };

      // Act
      const result = mapProjectFromApiToVm(project);

      // Assert
      expect(result).toEqual(expectedResult);
    });

    it('should return expected result feeding correct values', () => {
      // Arrange
      const project: apiModel.Project = {
        id: 'project id',
        name: 'project name',
        externalId: 'external id',
        comments: 'project comments',
        isActive: true,
        employees: [
          {
            id: 'employee id',
            isAssigned: true,
            employeeName: 'employee name',
          },
        ],
      };

      const expectedResult: viewModel.Project = {
        id: 'project id',
        name: 'project name',
        externalId: 'external id',
        comments: 'project comments',
        isActive: true,
        employees: [
          {
            id: 'employee id',
            isAssigned: true,
            employeeName: 'employee name',
          },
        ],
      };

      // Act
      const result = mapProjectFromApiToVm(project);

      // Assert
      expect(result).toEqual(expectedResult);
    });
  });
});
