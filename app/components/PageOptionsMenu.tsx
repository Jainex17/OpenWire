"use client";

import { useState } from "react";
import { MoreHorizontalIcon, Trash2Icon, CopyIcon, PencilIcon, EyeIcon } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

interface PageOptionsMenuProps {
    pageId: string;
    pageTitle: string;
    isOpen: boolean;
    isOnlyPage: boolean;
    onToggle: () => void;
    onClose: () => void;
    onRename: (newTitle: string) => void;
    onDuplicate: () => void;
    onDelete: () => void;
    onPreview: () => void;
}

export default function PageOptionsMenu({
    pageId,
    pageTitle,
    isOpen,
    isOnlyPage,
    onToggle,
    onClose,
    onRename,
    onDuplicate,
    onDelete,
    onPreview,
}: PageOptionsMenuProps) {
    const [showRenameDialog, setShowRenameDialog] = useState(false);
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);
    const [newTitle, setNewTitle] = useState(pageTitle);

    const handleRenameClick = () => {
        setNewTitle(pageTitle);
        setShowRenameDialog(true);
        onClose();
    };

    const handleRenameSubmit = () => {
        if (newTitle.trim()) {
            onRename(newTitle.trim());
        }
        setShowRenameDialog(false);
    };

    const handleDuplicateClick = () => {
        onDuplicate();
        onClose();
    };

    const handleDeleteClick = () => {
        if (isOnlyPage) {
            setShowDeleteDialog(true);
            onClose();
            return;
        }
        setShowDeleteDialog(true);
        onClose();
    };

    const handleDeleteConfirm = () => {
        onDelete();
        setShowDeleteDialog(false);
    };

    const handlePreviewClick = () => {
        onPreview();
        onClose();
    };

    return (
        <>
            <div className="relative">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button
                            variant={"ghost"}
                            className="rounded-[var(--radius)] py-2 px-3 hover:bg-accent hover:text-foreground cursor-pointer"
                        >
                            <MoreHorizontalIcon width={22} className="cursor-pointer" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="z-100 bg-primary-foreground text-secondary-foreground border-none">
                        <DropdownMenuItem onClick={handleRenameClick}>
                            <PencilIcon width={22} className="cursor-pointer" />
                            <span>
                                Rename Page
                            </span>
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={handleDuplicateClick}>
                            <CopyIcon width={22} className="cursor-pointer" />
                            <span>
                                Duplicate Page
                            </span>
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={handlePreviewClick}>
                            <EyeIcon width={22} className="cursor-pointer" />
                            <span>
                                Preview Page
                            </span>
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={handleDeleteClick}>
                            <Trash2Icon width={22} className="cursor-pointer" />
                            <span>
                                Delete Page
                            </span>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>

            <Dialog open={showRenameDialog} onOpenChange={setShowRenameDialog}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Rename Page</DialogTitle>
                        <DialogDescription>
                            Enter a new name for this page.
                        </DialogDescription>
                    </DialogHeader>
                    <Input
                        value={newTitle}
                        onChange={(e) => setNewTitle(e.target.value)}
                        placeholder="Page title"
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                handleRenameSubmit();
                            }
                        }}
                        autoFocus
                    />
                    <DialogFooter>
                        <Button variant="outline" onClick={() => setShowRenameDialog(false)}>
                            Cancel
                        </Button>
                        <Button onClick={handleRenameSubmit}>Rename</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

            <AlertDialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
                <AlertDialogContent className="border-none">
                    <AlertDialogHeader>
                        <AlertDialogTitle>
                            {isOnlyPage ? "Cannot Delete Page" : "Delete Page"}
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                            {isOnlyPage
                                ? "This is the only page in your project. You need at least one page."
                                : `Are you sure you want to delete "${pageTitle}"? This will also delete all sections on this page. This action cannot be undone.`}
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        {isOnlyPage ? (
                            <AlertDialogCancel>OK</AlertDialogCancel>
                        ) : (
                            <>
                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                <AlertDialogAction
                                    onClick={handleDeleteConfirm}
                                    className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                                >
                                    Delete
                                </AlertDialogAction>
                            </>
                        )}
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    );
}
