string ZohoBooks.create_journal_to_books(int RECID)
{
	post_finance_col = Post_to_finance1[ID == input.RECID];
	credit_id = xxxxxxxxxxxxx;
	gosi_credit_id = xxxxxxxxxxxxx;
	if(post_finance_col.count() > 0)
	{
		lineitem_list = List();
		datamap = Map();
		datamap.put("journal_date",zoho.currentdate.toString("yyyy-MM-dd"));
		datamap.put("notes",zoho.currentdate + " This month salary details");
		taglist = List();
		tagMap1 = Map();
		tagMap1.put("tag_option_id","xxxxxxxxxxxxxxx");
		tagMap1.put("tag_name","Cost Center");
		tagMap1.put("tag_id","xxxxxxxxxxxxxxx");
		taglist.add(tagMap1);
		if(post_finance_col.Basic > 0)
		{
			basic_map = Map();
			basic_map2 = Map();
			basic_map.put("debit_or_credit","credit");
			basic_map.put("description","Basic salary");
			basic_map.put("amount",post_finance_col.Basic);
			basic_map.put("account_id",credit_id);
			basic_map.put("tags",taglist);
			basic_map2.put("debit_or_credit","debit");
			basic_map2.put("description","Basic salary");
			basic_map2.put("amount",post_finance_col.Basic);
			basic_map2.put("account_id",post_finance_col.GL_Basic.Zoho_Books_ID);
			basic_map2.put("tags",taglist);
			lineitem_list.add(basic_map);
			lineitem_list.add(basic_map2);
		}
		if(post_finance_col.Housing_Allowances > 0)
		{
			housing_map = Map();
			housing_map2 = Map();
			housing_map.put("debit_or_credit","credit");
			housing_map.put("description","Housing Allowance");
			housing_map.put("amount",post_finance_col.Housing_Allowances);
			housing_map.put("account_id",credit_id);
			housing_map.put("tags",taglist);
			housing_map2.put("debit_or_credit","debit");
			housing_map2.put("description","Housing Allowance");
			housing_map2.put("amount",post_finance_col.Housing_Allowances);
			housing_map2.put("account_id",post_finance_col.GL_Housing_Allowance.Zoho_Books_ID);
			housing_map2.put("tags",taglist);
			lineitem_list.add(housing_map);
			lineitem_list.add(housing_map2);
		}
		if(post_finance_col.Communication_Allowance > 0)
		{
			mobile_map = Map();
			mobile_map2 = Map();
			mobile_map.put("debit_or_credit","credit");
			mobile_map.put("description","Comminication Allowance");
			mobile_map.put("amount",post_finance_col.Communication_Allowance);
			mobile_map.put("account_id",credit_id);
			mobile_map.put("tags",taglist);
			mobile_map2.put("debit_or_credit","debit");
			mobile_map2.put("description","Comminication Allowance");
			mobile_map2.put("amount",post_finance_col.Communication_Allowance);
			mobile_map2.put("account_id",post_finance_col.GL_Mobile_Allowances.Zoho_Books_ID);
			mobile_map2.put("tags",taglist);
			lineitem_list.add(mobile_map);
			lineitem_list.add(mobile_map2);
		}
		if(post_finance_col.Transportation_Allowances > 0)
		{
			transport_map = Map();
			transport_map2 = Map();
			transport_map.put("debit_or_credit","credit");
			transport_map.put("description","Transport Allowance");
			transport_map.put("amount",post_finance_col.Transportation_Allowances);
			transport_map.put("account_id",credit_id);
			transport_map.put("tags",taglist);
			transport_map2.put("debit_or_credit","debit");
			transport_map2.put("description","Transport Allowance");
			transport_map2.put("amount",post_finance_col.Transportation_Allowances);
			transport_map2.put("account_id",post_finance_col.GL_Transportation_Allowances.Zoho_Books_ID);
			transport_map2.put("tags",taglist);
			lineitem_list.add(transport_map);
			lineitem_list.add(transport_map2);
		}
		if(post_finance_col.Other_Allowances > 0)
		{
			other_map = Map();
			other_map2 = Map();
			other_map.put("debit_or_credit","credit");
			other_map.put("description","Other Allowance");
			other_map.put("amount",post_finance_col.Other_Allowances);
			other_map.put("account_id",credit_id);
			other_map.put("tags",taglist);
			other_map2.put("debit_or_credit","debit");
			other_map2.put("description","Other Allowance");
			other_map2.put("amount",post_finance_col.Other_Allowances);
			other_map2.put("account_id",post_finance_col.GL_Other_Allowances.Zoho_Books_ID);
			other_map2.put("tags",taglist);
			lineitem_list.add(other_map);
			lineitem_list.add(other_map2);
		}
		if(post_finance_col.GOSI_Contribution > 0)
		{
			gosi_map = Map();
			gosi_map2 = Map();
			gosi_map.put("debit_or_credit","credit");
			gosi_map.put("description","GOSI");
			gosi_map.put("amount",post_finance_col.GOSI_Contribution);
			gosi_map.put("account_id",gosi_credit_id);
			gosi_map.put("tags",taglist);
			gosi_map2.put("debit_or_credit","debit");
			gosi_map2.put("description","GOSI");
			gosi_map2.put("amount",post_finance_col.GOSI_Contribution);
			gosi_map2.put("account_id",post_finance_col.GL_GOSI.Zoho_Books_ID);
			gosi_map2.put("tags",taglist);
			lineitem_list.add(gosi_map);
			lineitem_list.add(gosi_map2);
		}
		if(post_finance_col.Total_Deductions > 0)
		{
			other_dec_map = Map();
			other_dec_map2 = Map();
			other_dec_map.put("debit_or_credit","credit");
			other_dec_map.put("description","Other Deduction");
			other_dec_map.put("amount",post_finance_col.Total_Deductions);
			other_dec_map.put("account_id",credit_id);
			other_dec_map.put("tags",taglist);
			other_dec_map2.put("debit_or_credit","debit");
			other_dec_map2.put("description","Other Deduction");
			other_dec_map2.put("amount",post_finance_col.Total_Deductions);
			other_dec_map2.put("account_id",post_finance_col.GL_Other_deductions.Zoho_Books_ID);
			other_dec_map2.put("tags",taglist);
			lineitem_list.add(other_dec_map);
			lineitem_list.add(other_dec_map2);
		}
		if(post_finance_col.Incentive > 0)
		{
			incentive_map = Map();
			incentive_map2 = Map();
			incentive_map.put("debit_or_credit","credit");
			incentive_map.put("description","Incentives");
			incentive_map.put("amount",post_finance_col.Incentive);
			incentive_map.put("account_id",credit_id);
			incentive_map.put("tags",taglist);
			incentive_map2.put("debit_or_credit","debit");
			incentive_map2.put("description","Incentives");
			incentive_map2.put("amount",post_finance_col.Incentive);
			incentive_map2.put("account_id",post_finance_col.GL_Incentives.Zoho_Books_ID);
			incentive_map2.put("tags",taglist);
			lineitem_list.add(incentive_map);
			lineitem_list.add(incentive_map2);
		}
		if(post_finance_col.Transfer_Allowances > 0)
		{
			transfer_allo_map = Map();
			transfer_allo_map2 = Map();
			transfer_allo_map.put("debit_or_credit","credit");
			transfer_allo_map.put("description","Transfer Allowances");
			transfer_allo_map.put("amount",post_finance_col.Transfer_Allowances);
			transfer_allo_map.put("account_id",credit_id);
			transfer_allo_map.put("tags",taglist);
			transfer_allo_map2.put("debit_or_credit","debit");
			transfer_allo_map2.put("description","Transfer Allowances");
			transfer_allo_map2.put("amount",post_finance_col.Transfer_Allowances);
			transfer_allo_map2.put("account_id",post_finance_col.GL_Transfer_Allowances.Zoho_Books_ID);
			transfer_allo_map2.put("tags",taglist);
			lineitem_list.add(transfer_allo_map);
			lineitem_list.add(transfer_allo_map2);
		}
		datamap.put("line_items",lineitem_list);
		create_resp = invokeurl
		[
			url :"https://books.zoho.com/api/v3/journals?organization_id=xxxxxxxx"
			type :POST
			parameters:datamap.toString()
			connection:"zohobooks1"
		];
		// 		info create_resp;
		// 		get_resp = zoho.books.getRecordsByID("journals", "OrgID", "recordID","zohobooks");
		// 		info get_resp ;
	}
	return create_resp.get("message");
}