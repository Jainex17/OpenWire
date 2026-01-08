"use client";

import { useState } from "react";
import { MoreHorizontalIcon, Trash2Icon, CopyIcon, PencilIcon } from "lucide-react";
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

    return (
        <>
            <div className="relative">
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        onToggle();
                    }}
                    className="rounded-[var(--radius)] py-2 px-3 hover:bg-accent hover:text-foreground"
                >
                    <MoreHorizontalIcon width={22} className="cursor-pointer" />
                </button>

                {isOpen && (
                    <div
                        className="absolute right-0 top-full mt-1 w-48 bg-popover border border-border rounded-[var(--radius)] shadow-lg z-150 py-1 overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={handleRenameClick}
                            className="w-full px-3 py-2 text-left text-sm text-foreground hover:bg-accent flex items-center gap-2 transition-colors"
                        >
                            <PencilIcon width={16} />
                            Rename Page
                        </button>
                        <button
                            onClick={handleDuplicateClick}
                            className="w-full px-3 py-2 text-left text-sm text-foreground hover:bg-accent flex items-center gap-2 transition-colors"
                        >
                            <CopyIcon width={16} />
                            Duplicate Page
                        </button>
                        <div className="h-px bg-border my-1" />
                        <button
                            onClick={handleDeleteClick}
                            className="w-full px-3 py-2 text-left text-sm text-destructive hover:bg-destructive/10 flex items-center gap-2 transition-colors"
                        >
                            <Trash2Icon width={16} />
                            Delete Page
                        </button>
                    </div>
                )}
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
                <AlertDialogContent>
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
