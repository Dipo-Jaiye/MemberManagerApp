import { Test, TestingModule } from '@nestjs/testing';
import { MemberDepartmentController } from './member-department.controller';
import { MemberDepartmentService } from './member-department.service';

describe('MemberDepartmentController', () => {
  let controller: MemberDepartmentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MemberDepartmentController],
      providers: [MemberDepartmentService],
    }).compile();

    controller = module.get<MemberDepartmentController>(MemberDepartmentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
