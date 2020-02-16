
drop schema PUBLIC cascade;

create table student(
    id bigint, -- 主鍵
    code varchar(50), -- 學號
    name varchar(50), -- 姓名
    sex integer, -- 性別
    age integer, -- 年齡
    political varchar(50), -- 政治面貌
    origin varchar(50), -- 籍貫
    professional varchar(50) -- 所屬系
);
alter table student
    add constraint pk_student primary key (id);
alter table student
    alter column id bigint generated by default as identity (start with 1, increment by 1);


---------------------------------------------------------------------
---------------------------------------------------------------------
insert into student(id,code,name,sex,age,political,origin,professional)
    values(1,'2002015','張光和',1,21,'團員','湖北省','物流專案學院');
insert into student(id,code,name,sex,age,political,origin,professional)
    values(2,'2002002','張值強',1,22,'黨員','河南省','動力專案系');
insert into student(id,code,name,sex,age,political,origin,professional)
    values(3,'2002003','槐  心',1,23,'團員','四川省','管理學院');
insert into student(id,code,name,sex,age,political,origin,professional)
    values(4,'2002004','王小勇',1,23,'團員','重慶市','材料學院');
insert into student(id,code,name,sex,age,political,origin,professional)
    values(5,'2002005','王歷歷',1,22,'黨員','河北省','文法學院系');
insert into student(id,code,name,sex,age,political,origin,professional)
    values(6,'2002006','吳孟達',1,23,'群眾','香港特別行政區','電腦學院');
insert into student(id,code,name,sex,age,political,origin,professional)
    values(7,'2002007','金嫣紅',2,22,'團員','山西省','電腦學院');
insert into student(id,code,name,sex,age,political,origin,professional)
    values(8,'2002008','劉長艷',2,22,'黨員','北京市','數理學院');
insert into student(id,code,name,sex,age,political,origin,professional)
    values(9,'2002009','許  強',2,23,'團員','安徽省','機械學院');
insert into student(id,code,name,sex,age,political,origin,professional)
    values(10,'2002010','楊小鵑',2,20,'團員','廣西','文法學院');
insert into student(id,code,name,sex,age,political,origin,professional)
    values(11,'2002011','岳不群',1,25,'黨員','安徽省','體育系');
insert into student(id,code,name,sex,age,political,origin,professional)
    values(12,'2002012','任我行',1,26,'團員','江蘇省','機械學院');
insert into student(id,code,name,sex,age,political,origin,professional)
    values(13,'2002016','劉  渠',1,24,'團員','黑龍江省','環境專案系');
insert into student(id,code,name,sex,age,political,origin,professional)
    values(14,'2002014','黃  蓉',2,21,'黨員','福建省','外語系');
insert into student(id,code,name,sex,age,political,origin,professional)
    values(15,'2002001','王雨嫣',2,20,'群眾','浙江省','電腦學院');
insert into student(id,code,name,sex,age,political,origin,professional)
    values(16,'2002013','喬  風',1,26,'群眾','青海省','繼續教育學院');


commit;

shutdown;

