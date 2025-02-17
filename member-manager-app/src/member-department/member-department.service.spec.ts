import { Test, TestingModule } from '@nestjs/testing';
import { MemberDepartmentService } from './member-department.service';

describe('MemberDepartmentService', () => {
  let service: MemberDepartmentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MemberDepartmentService],
    }).compile();

    service = module.get<MemberDepartmentService>(MemberDepartmentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
