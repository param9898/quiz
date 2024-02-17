package com.example.fsdproject.service;

import com.example.fsdproject.entity.AuctionItem;
import com.example.fsdproject.repository.AuctionItemRepository;
import com.example.fsdproject.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class AuctionItemService {

    @Autowired
    private AuctionItemRepository auctionItemRepository;

    public List<AuctionItem> findAllItems()
    {
        return auctionItemRepository.findAll();
    }

    public AuctionItem saveAuctionItem(AuctionItem auctionItem) {
        return auctionItemRepository.save(auctionItem);
    }

    public List<AuctionItem> findByUserId(Long userId) {
        return auctionItemRepository.findByUser_Id(userId);
    }
}


