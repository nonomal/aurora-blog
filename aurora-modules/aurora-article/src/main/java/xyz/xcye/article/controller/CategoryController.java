package xyz.xcye.article.controller;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.context.config.annotation.RefreshScope;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import xyz.xcye.article.po.Category;
import xyz.xcye.article.service.CategoryService;
import xyz.xcye.article.vo.CategoryVO;
import xyz.xcye.core.annotaion.controller.ModifyOperation;
import xyz.xcye.core.annotaion.controller.SelectOperation;
import xyz.xcye.core.valid.Insert;
import xyz.xcye.core.valid.Update;
import xyz.xcye.data.entity.Condition;
import xyz.xcye.data.entity.PageData;

import javax.validation.groups.Default;

/**
 * @author qsyyke
 * @date Created in 2022/5/11 20:38
 */

@Api("操作文章类别的控制类")
@RestController
@RefreshScope
@RequestMapping("/blog/category")
public class CategoryController {

    @Autowired
    private CategoryService categoryService;

    @ApiOperation("插入类别信息")
    @ModifyOperation
    @PostMapping
    public int insertCategory(@Validated({Insert.class, Default.class})Category category) {
        return categoryService.insertSelective(category);
    }

    @ApiOperation("逻辑删除类别")
    @ModifyOperation
    @DeleteMapping("/{uid}")
    public int deleteCategory(@PathVariable("uid") long uid) {
        return categoryService.deleteByPrimaryKey(uid);
    }

    @ApiOperation("物理删除类别信息")
    @ModifyOperation
    @DeleteMapping("/physics/{uid}")
    public int physicsDeleteCategory(@PathVariable("uid") long uid) {
        return categoryService.physicsDeleteByUid(uid);
    }

    @ApiOperation("根据条件查询类别信息")
    @SelectOperation
    @GetMapping
    public PageData<CategoryVO> selectAllCategory(Condition<Long> condition) {
        return categoryService.selectByCondition(condition);
    }

    @ApiOperation("根据uid查询类别信息")
    @SelectOperation
    @GetMapping("/{uid}")
    public CategoryVO selectCategoryByUid(@PathVariable("uid") long uid) {
        return categoryService.selectByUid(uid);
    }

    @ApiOperation("修改类别信息")
    @ModifyOperation
    @PutMapping
    public int updateCategory(@Validated({Update.class, Default.class}) Category category) {
        return categoryService.updateByPrimaryKeySelective(category);
    }
}
