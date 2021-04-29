Search.setIndex({docnames:["index","source/cgmodsel","source/cgmodsel.models","source/modules"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":3,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":2,"sphinx.domains.rst":2,"sphinx.domains.std":2,sphinx:56},filenames:["index.rst","source\\cgmodsel.rst","source\\cgmodsel.models.rst","source\\modules.rst"],objects:{"":{cgmodsel:[1,0,0,"-"]},"cgmodsel.admm":{AdmmCGaussianPW:[1,1,1,""],AdmmCGaussianSL:[1,1,1,""],AdmmGaussianPW:[1,1,1,""],AdmmGaussianSL:[1,1,1,""]},"cgmodsel.admm.AdmmCGaussianPW":{get_objective:[1,2,1,""],set_graph:[1,2,1,""]},"cgmodsel.admm.AdmmCGaussianSL":{get_objective:[1,2,1,""]},"cgmodsel.base_admm":{BaseAdmm:[1,1,1,""]},"cgmodsel.base_admm.BaseAdmm":{admm_param:[1,3,1,""],opts:[1,3,1,""],set_defaults_admm:[1,2,1,""],solve:[1,2,1,""]},"cgmodsel.base_huber":{HuberBase:[1,1,1,""]},"cgmodsel.base_huber.HuberBase":{callback:[1,2,1,""],get_bounds:[1,2,1,""],get_starting_point:[1,2,1,""],nocallback:[1,2,1,""],preprocess:[1,2,1,""],print_params:[1,2,1,""],slimcallback:[1,2,1,""],solve:[1,2,1,""],solve_sparse:[1,2,1,""]},"cgmodsel.base_solver":{BaseCGSolver:[1,1,1,""],BaseGradSolver:[1,1,1,""],BaseSolverPW:[1,1,1,""],BaseSolverSL:[1,1,1,""],BaseSparseSolver:[1,1,1,""],set_sparsity_weights:[1,4,1,""]},"cgmodsel.base_solver.BaseCGSolver":{cat_data:[1,3,1,""],cat_format_required:[1,3,1,""],cont_data:[1,3,1,""],drop_data:[1,2,1,""],get_name:[1,2,1,""],meta:[1,3,1,""],name:[1,3,1,""],opts:[1,3,1,""]},"cgmodsel.base_solver.BaseGradSolver":{get_params:[1,2,1,""],pack:[1,2,1,""],unpack:[1,2,1,""]},"cgmodsel.base_solver.BaseSolverPW":{get_canonicalparams:[1,2,1,""],get_regularization_params:[1,2,1,""],lbda:[1,3,1,""],problem_vars:[1,3,1,""],set_regularization_params:[1,2,1,""]},"cgmodsel.base_solver.BaseSolverSL":{get_canonicalparams:[1,2,1,""],get_regularization_params:[1,2,1,""],problem_vars:[1,3,1,""],set_regularization_params:[1,2,1,""]},"cgmodsel.base_solver.BaseSparseSolver":{name:[1,3,1,""],opts:[1,3,1,""],shrink:[1,2,1,""],sparse_norm:[1,2,1,""],useweights:[1,3,1,""],weights:[1,3,1,""]},"cgmodsel.dataops":{dummy_from_cat_data:[1,4,1,""],get_meta_data:[1,4,1,""],load_data_from_csv:[1,4,1,""],load_prepare_data:[1,4,1,""],load_prepare_split_data:[1,4,1,""],load_traintest_datasets:[1,4,1,""],prepare_cat_data:[1,4,1,""],split_traintest:[1,4,1,""],standardize_continuous_data:[1,4,1,""],write_to_csv:[1,4,1,""]},"cgmodsel.huber_clz":{HuberCLZ:[1,1,1,""]},"cgmodsel.huber_clz.HuberCLZ":{crossvalidate:[1,2,1,""],get_bounds:[1,2,1,""],get_canonicalparams:[1,2,1,""],get_fval_and_grad:[1,2,1,""],get_starting_point:[1,2,1,""],preprocess:[1,2,1,""],set_regularization_params:[1,2,1,""]},"cgmodsel.map":{MAP:[1,1,1,""]},"cgmodsel.map.MAP":{cat_format_required:[1,3,1,""],crossvalidate:[1,2,1,""],fit_fixed_covariance:[1,2,1,""],fit_variable_covariance:[1,2,1,""],get_plhvalue:[1,2,1,""],name:[1,3,1,""]},"cgmodsel.models":{base:[2,0,0,"-"],model_clz:[2,0,0,"-"],model_pw:[2,0,0,"-"],model_pwsl:[2,0,0,"-"]},"cgmodsel.models.base":{BaseModel:[2,1,1,""],BaseModelPW:[2,1,1,""],canon_to_meanparams:[2,4,1,""],get_modeltype:[2,4,1,""],mean_to_canonparams:[2,4,1,""],pad:[2,4,1,""],unpad:[2,4,1,""]},"cgmodsel.models.base.BaseModel":{annotations:[2,3,1,""],get_graph:[2,2,1,""],get_group_mat:[2,2,1,""],get_meta:[2,2,1,""],get_numberofedges:[2,2,1,""],meta:[2,3,1,""],n_latent:[2,3,1,""],name:[2,3,1,"id0"],repr_graphical:[2,2,1,""]},"cgmodsel.models.base.BaseModelPW":{get_graph:[2,2,1,""],get_group_mat:[2,2,1,""],get_pw_mat:[2,2,1,""],get_thetaalpha:[2,2,1,""],modeltype:[2,3,1,""],sample:[2,2,1,""],save:[2,2,1,""],update_annotations:[2,2,1,""]},"cgmodsel.models.model_clz":{ModelCLZ:[2,1,1,""]},"cgmodsel.models.model_clz.ModelCLZ":{get_graph:[2,2,1,""],get_group_mat:[2,2,1,""],get_meanparams:[2,2,1,""],get_params:[2,2,1,""],is_valid:[2,2,1,""],name:[2,3,1,""]},"cgmodsel.models.model_pw":{ModelPW:[2,1,1,""]},"cgmodsel.models.model_pw.ModelPW":{add_latent_cg:[2,2,1,""],get_meanparams:[2,2,1,""],get_no_edges:[2,2,1,""],get_pairwiseparams:[2,2,1,""],get_params:[2,2,1,""],marginalize:[2,2,1,""],name:[2,3,1,""],sample:[2,2,1,""]},"cgmodsel.models.model_pwsl":{ModelPWSL:[2,1,1,""]},"cgmodsel.models.model_pwsl.ModelPWSL":{compare:[2,2,1,""],get_groupnorm_theta:[2,2,1,""],get_grpnorm_s:[2,2,1,""],get_incoherence:[2,2,1,""],get_lambdamax:[2,2,1,""],get_meanparams:[2,2,1,""],get_params:[2,2,1,""],get_params_sl:[2,2,1,""],get_stats:[2,2,1,""],get_theta:[2,2,1,""],name:[2,3,1,""],plot_sl:[2,2,1,""],repr_graphical:[2,2,1,""],sample:[2,2,1,""],to_pwmodel:[2,2,1,""]},"cgmodsel.prox":{LikelihoodProx:[1,1,1,""]},"cgmodsel.prox.LikelihoodProx":{crossvalidate:[1,2,1,""],plh:[1,2,1,""],solve:[1,2,1,""]},"cgmodsel.utils":{dummy2dummyred:[1,4,1,""],dummy_to_index:[1,4,1,""],dummy_to_index_single:[1,4,1,""],frange:[1,4,1,""],grp_soft_shrink:[1,4,1,""],index_to_dummy:[1,4,1,""],l21norm:[1,4,1,""],logsumexp:[1,4,1,""],strlistfrom:[1,4,1,""],tomatlabmatrix:[1,4,1,""]},cgmodsel:{admm:[1,0,0,"-"],base_admm:[1,0,0,"-"],base_huber:[1,0,0,"-"],base_solver:[1,0,0,"-"],dataops:[1,0,0,"-"],huber_clz:[1,0,0,"-"],map:[1,0,0,"-"],models:[2,0,0,"-"],prox:[1,0,0,"-"],utils:[1,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","attribute","Python attribute"],"4":["py","function","Python function"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:attribute","4":"py:function"},terms:{"100":1,"1000":1,"2011":2,"2012":1,"2013":1,"2019":[1,2],"2021":2,"2mu":1,"2pi":2,"abstract":[1,2],"boolean":2,"case":[1,2],"class":[1,2],"default":1,"float":[1,2],"function":[1,2],"int":[1,2],"return":[1,2],"true":[1,2],"try":[],"var":[],Las:2,The:[1,2],_get_group_mat:2,_get_meanparam:2,_test:1,_train:1,abc:[1,2],about:[1,2],abov:[1,2],abstol:1,accept:[],access:1,accord:1,adapt:1,add:2,add_latent_cg:2,addit:[1,2],addu:2,addunivari:2,adjust:1,admm:3,admm_param:1,admmcgaussianpw:1,admmcgaussiansl:1,admmgaussianpw:1,admmgaussiansl:1,after:[1,2],aggr:2,aggreg:2,aka:2,algorithm:1,all:[1,2],allow:1,along:1,alpha:[1,2],altern:1,analyt:1,ani:1,annot:2,anot:2,anoth:2,appli:2,approxgrad:1,approxim:1,arg:[1,2],argument:[1,2],arr:2,arrai:[1,2],artifici:1,associ:[1,2],assum:1,attent:2,attribut:1,augment:[1,2],author:[1,2],avail:2,avoid:1,axi:1,base:[1,3],base_admm:3,base_hub:3,base_solv:3,baseadmm:1,basecgsolv:1,basegradsolv:1,basemodel:2,basemodelpw:2,basesolverpw:1,basesolversl:1,basesparsesolv:1,basic:1,been:[1,2],befor:1,beta:1,between:[1,2],bfg:1,block:2,bool:[1,2],both:2,bound:1,c_x:2,calcul:[1,2],call:[1,2],callback:1,can:1,canon:2,canon_to_meanparam:2,canparam:2,caption:2,cat_data:[1,2],cat_format_requir:1,cat_glim:1,categor:[1,2],cattyp:1,catuniqu:1,caus:1,cbarscal:2,certain:1,chain:2,chandrasekaran:2,check:2,cheng:2,clean_l:2,cleanl:[],clz:[1,2],clz_param:2,code:[1,2],coded_colnam:1,coh:2,col:[1,2],column:[1,2],compar:[1,2],compat:2,complement:2,complet:1,compon:[1,2],compound:2,comput:1,concaten:1,condit:[1,2],connectionprob:2,consist:1,constant:1,constrain:2,constraint:1,constructor:[],cont:2,cont_data:[1,2],cont_datatest:1,cont_datatrain:1,contain:[1,2],content:3,contin:1,continu:[1,2],control:[1,2],conveni:1,converg:1,convers:2,convert:[1,2],convex:1,copi:1,copyright:[1,2],correspond:[1,2],could:1,count:2,covari:[1,2],cross:1,crossvalid:1,csv:1,cts:2,ctsscale:2,cumul:1,current:1,cutoff:2,cval:1,d_x:2,data:[1,2],datafram:1,dataop:3,datapoint:[],dataset:[1,2],datasourc:1,debug:1,decomposit:2,decreas:1,definit:[1,2],deg_freedom:1,degre:1,delimit:1,delta0:1,delta:1,denot:1,densiti:[1,2],depend:2,deriv:2,describ:[1,2],detail:[],detectindexcol:1,determin:2,deviat:1,diagcutoff:2,diagon:[1,2],dicret:1,dict:[1,2],dictionairi:1,dictionari:[1,2],diff_rank:2,differ:2,direct:[1,2],directli:1,dirichlet:1,discret:[1,2],disp:2,disp_converg_msg:1,displai:1,disscal:2,dissert:2,distribut:[1,2],doe:1,doing:1,drop:1,drop_data:1,drop_idx:2,dtest:1,dtrain:1,dummi:[1,2],dummy2dummyr:1,dummy_data:1,dummy_from_cat_data:1,dummy_r:1,dummy_to_index:1,dummy_to_index_singl:1,dummy_x:1,e_i:2,each:2,earlystopping_inn:1,edg:2,effect:2,effici:1,either:[1,2],element:1,elimin:1,els:[1,2],empir:1,empti:2,encod:1,ensur:2,entri:1,error:1,essenti:1,estim:1,etc:[1,2],euclidean:2,exact:1,exclud:[1,2],exp:[1,2],experiment:[1,2],explicitbound:1,exponenti:1,extract:1,factor:1,fals:[1,2],faster:1,fcall:1,featur:1,fer:[],file:[1,2],filenam:[1,2],filename_trunk:1,first:[1,2],fit:1,fit_fixed_covari:1,fit_variable_covari:1,fix:2,flat:1,flatten:1,folder:2,foldernam:2,follow:2,for_matlab:1,form:[1,2],format:1,formula:2,forward:2,frame:1,frang:1,frank:[1,2],freedom:1,from:[1,2],ftol:1,ftol_inn:1,gamma:1,gaussian:[1,2],gaussnam:1,gener:[1,2],get:[1,2],get_bound:1,get_canonicalparam:1,get_fval_and_grad:1,get_graph:2,get_group_mat:2,get_groupnorm_theta:2,get_grpnorm_:2,get_incoher:2,get_lambdamax:2,get_meanparam:2,get_meta:2,get_meta_data:1,get_modeltyp:2,get_nam:1,get_no_edg:2,get_numberofedg:2,get_object:1,get_pairwiseparam:2,get_param:[1,2],get_params_sl:2,get_plhvalu:1,get_pw_mat:2,get_regularization_param:1,get_starting_point:1,get_stat:2,get_theta:2,get_thetaalpha:2,gibb:2,gibbs_it:2,given:[1,2],glim:1,good:1,gradient:1,graph:[1,2],graphic:[1,2],group:[1,2],groupnorm:[],grp_soft_shrink:1,guess:1,has:[1,2],have:2,henc:2,here:[1,2],highest:2,howev:2,huber:1,huber_clz:3,huberbas:1,huberclz:1,hyperparam:1,identifi:[1,2],idx:1,ignor:1,implement:[1,2],in_pad:2,incid:1,includ:[1,2],incoher:2,increas:1,independ:2,index:[0,1],index_to_dummi:1,indic:[1,2],indirect:2,individu:1,inexact:1,infer:[1,2],infil:2,info:[1,2],inform:[1,2],initi:1,inner:1,innercallback:1,input:1,instanc:[1,2],instead:1,integ:1,interac:2,interact:[1,2],interpret:1,interv:1,invert:2,is_valid:2,issu:1,iter0:1,iter:1,jena:[1,2],jointboundari:2,just:2,keepdim:1,kei:[1,2],keyword:2,klbda:1,known:1,kwarg:[1,2],l12:[1,2],l21:[],l21norm:1,l_12:1,l_1:[],l_ab:2,l_other:2,l_p:1,l_self:2,la0:2,label:1,lambda0:2,lambda:[1,2],lambda_r:2,laplacian:1,lasso:1,last:1,latent:[1,2],lbda:1,leav:1,less:2,level:[1,2],levina:2,likelihood:1,likelihoodprox:1,linalg:2,linear:1,list:[1,2],load:[1,2],load_data_from_csv:1,load_prepare_data:1,load_prepare_split_data:1,load_traintest_dataset:1,log:1,loglikelihood:1,logsumexp:1,logsupexp:1,look:[1,2],loop:1,low:[1,2],lst2015:1,ltot:[1,2],made:1,mai:1,make:2,map:3,margin:2,markov:2,mat:1,mat_:1,mat_l:1,mat_sigma0:1,mat_sigma:1,mat_sigma_x:1,mat_z:1,matlab:1,matric:[1,2],matrix:[1,2],max_i:2,maxim:2,maximum:1,maxit:1,maxiter_inn:1,maxiter_out:1,mean:[1,2],mean_param:1,mean_to_canonparam:2,meanparam:2,meanparamet:[],meanssigma:1,meta:[1,2],method:[1,2],might:[1,2],min:1,min_:1,minus_edg:2,miss:2,mode:2,model:[1,3],model_clz:[1,3],model_pswl:2,model_pw:[1,3],model_pw_bas:2,model_pwsl:[1,3],modelclz:2,modelpw:2,modelpwsl:2,modeltyp:2,modifi:1,modul:[0,3],more:2,mse:1,much:1,mus:[1,2],must:1,n_art_cat:1,n_art_cg:1,n_cat:1,n_cg:[1,2],n_data:1,n_group:1,n_latent:[1,2],naiv:2,name:[1,2],ndarrai:1,neg:[1,2],nice:2,nocallback:1,node:1,non:[1,2],none:[1,2],nonneg:1,norm:[1,2],normal:1,normaliz:2,normalize_l:2,note:[1,2],noth:1,notitl:2,number:[1,2],numpi:1,nus:2,nussbaum:[1,2],nvar:1,object:1,observ:[1,2],obtain:2,off:1,old_thetaalpha:1,one:[1,2],onli:2,onto:2,oper:1,opt:1,optim:[1,2],option:[1,2],optvar:1,other:[1,2],otherwis:2,out:[1,2],outcom:1,outfil:2,output:1,over:1,overflow:1,overwritten:2,pack:1,packag:[0,3],pad:2,page:0,pair:1,pairwis:[1,2],panda:1,paral:1,param:1,paramet:[1,2],parametr:[1,2],pass:[1,2],past:1,path:2,per:1,perform:[1,2],perman:1,place:1,plh:1,plot:2,plot_sl:2,plottyp:2,plus_edg:2,point:[1,2],posit:[1,2],precis:[1,2],precisionmatrix:2,precmatsign:2,predict:1,prefix:1,prepare_cat_data:1,preprocess:1,present:2,primarili:1,princip:2,print:1,print_param:1,printspec:2,prior:1,prioriti:2,probabl:[1,2],problem:1,problem_var:1,process:1,produc:1,project:2,provid:[1,2],prox:3,prox_param:1,proxim:1,pseudo:1,ptype:1,pure:1,pw_mat:2,pw_param:2,pwmodel:[],python:1,quantit:1,quantiti:1,random:1,rang:1,rank:[1,2],ratio:1,ration:1,read:[1,2],real:1,reason:[1,2],recogn:1,red:1,reduc:1,refin:1,regparam:1,regular:[1,2],reiniti:2,reltol:1,remain:2,replac:1,report:1,repr_graph:2,repres:2,represent:[1,2],requir:1,reshapedprint:1,restart:1,result:1,retriev:1,reus:1,rho:1,rnd:1,row:[1,2],rowsonli:2,rpl_numericalcat:1,same:[1,2],samecolorbar:2,samescal:2,sampl:2,sampler:2,save:[1,2],savedmodel:2,scale:1,schur:2,scipi:1,script:[],search:0,section:[],see:[1,2],seed:[1,2],select:1,self:[1,2],sequenc:1,serv:1,set:[1,2],set_defaults_admm:1,set_direct:1,set_graph:1,set_regularization_param:1,set_sparsity_weight:1,setup:[],sever:2,shall:2,shape:1,share:1,shift:1,should:1,shrink:1,shrinkag:1,shrunken:1,shuffl:1,shufflese:1,sigma:[1,2],sign:2,similar:[1,2],singl:[1,2],singular:2,size:[1,2],sl_param:2,slimcallback:1,smooth:1,smoothen:1,soft:1,solut:1,solv:1,solve_spars:1,solver:1,some:2,space:[1,2],spars:[1,2],sparse_norm:1,sparsiti:1,special:[1,2],specif:2,specifi:[1,2],split:1,split_traintest:1,splittingfactor:1,sqrt:1,stabl:1,standard:[1,2],standardize_continuous_data:1,start:1,stat:1,state:1,std:1,step:[1,2],stepwis:1,stop:1,stoptol:1,storag:1,store:[1,2],str:[1,2],strength:2,string:1,strlistfrom:1,submodul:3,subpackag:3,subproblem:1,suffix:1,suggest:1,sum:[1,2],sum_g:1,sum_r:2,summari:1,symscal:2,take:1,taken:[],tau:1,term:1,test:[1,2],thei:[1,2],them:2,theta:[1,2],theta_g:1,thi:[1,2],threshold:[1,2],to_pwmodel:2,toler:1,tomatlabmatrix:1,tracktim:1,train:1,tran:[],transfer:2,trial:2,tupe:[],tupl:[1,2],two:1,type:[1,2],typic:[1,2],uni:[1,2],univari:[1,2],unnorm:1,unobserv:1,unpack:1,unpad:2,unregular:1,until:[],update_annot:2,use:[1,2],use_reg:1,used:[1,2],useful:1,usegraph:2,user:1,uses:[1,2],useweight:1,using:[1,2],usual:1,util:3,val:1,valid:[1,2],valu:[1,2],variabl:[1,2],variou:[1,2],vec_mu0:1,vec_u:1,vector:[1,2],verb:[1,2],verbos:2,veri:1,version:[1,2],via:1,visual:2,vmax:2,wai:1,want:2,ware:1,warm:1,warminit:1,warranti:1,weight:1,when:1,where:[1,2],whether:[1,2],which:[1,2],whole:1,wise:1,wishart:1,would:2,wrapper:[1,2],write:1,write_csv:1,write_to_csv:1,x_init:1,x_r:2,xue:1,yet:2,zero:[1,2],zhu:2,zou:1},titles:["Welcome to cgmodsel\u2019s documentation!","cgmodsel package","cgmodsel.models package","cgmodsel"],titleterms:{admm:1,base:2,base_admm:1,base_hub:1,base_solv:1,cgmodsel:[0,1,2,3],content:[0,1,2],dataop:1,document:0,huber_clz:1,indic:0,map:1,model:2,model_clz:2,model_pw:2,model_pwsl:2,modul:[1,2],packag:[1,2],prox:1,setup:[],submodul:[1,2],subpackag:1,tabl:0,util:1,welcom:0}})