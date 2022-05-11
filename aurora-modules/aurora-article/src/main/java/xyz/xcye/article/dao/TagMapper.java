package xyz.xcye.article.dao;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import xyz.xcye.article.po.Tag;
import xyz.xcye.data.entity.Condition;

import java.util.List;

@Mapper
public interface TagMapper {
    /**
     * delete by primary key
     * @param uid primaryKey
     * @return deleteCount
     */
    int deleteByPrimaryKey(Long uid);

    /**
     * insert record to table
     * @param record the record
     * @return insert count
     */
    int insert(Tag record);

    /**
     * insert record to table selective
     * @param record the record
     * @return insert count
     */
    int insertSelective(Tag record);

    /**
     * select by primary key
     * @param condition 查询条件，其中keyword->title(模糊查询)
     * @return object by primary key
     */
    List<Tag> selectByCondition(@Param("condition") Condition<Long> condition);

    /**
     * update record selective
     * @param record the updated record
     * @return update count
     */
    int updateByPrimaryKeySelective(Tag record);

    /**
     * update record
     * @param record the updated record
     * @return update count
     */
    int updateByPrimaryKey(Tag record);
}